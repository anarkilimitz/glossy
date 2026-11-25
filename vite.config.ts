import { readdir, readFile, writeFile } from 'node:fs/promises';
import { relative, resolve } from 'node:path';
import sharp from 'sharp';
import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

const rasterExtensions = /\.(jpe?g|png)$/i;
const productionAssetExtensions = /\.(html|css|js|mjs)$/i;

async function getFiles(directory: string): Promise<string[]> {
	const entries = await readdir(directory, { withFileTypes: true });
	const nestedFiles = await Promise.all(
		entries.map((entry) => {
			const entryPath = resolve(directory, entry.name);
			return entry.isDirectory() ? getFiles(entryPath) : [entryPath];
		}),
	);

	return nestedFiles.flat();
}

function generateProductionWebp(): Plugin {
	let outputDirectory = '';

	return {
		name: 'glossy-production-webp',
		apply: 'build',
		configResolved(config) {
			outputDirectory = resolve(config.root, config.build.outDir);
		},
		async closeBundle() {
			const allFiles = await getFiles(resolve(outputDirectory, 'images'));
			const rasterFiles = allFiles.filter((file) => rasterExtensions.test(file));
			const replacements = new Map<string, string>();

			await Promise.all(
				rasterFiles.map(async (sourceFile) => {
					const webpFile = sourceFile.replace(rasterExtensions, '.webp');
					await sharp(sourceFile)
						.webp({ quality: 82, alphaQuality: 100, effort: 4 })
						.toFile(webpFile);

					const publicPath = `/${relative(outputDirectory, sourceFile).replaceAll('\\', '/')}`;
					const webpPath = publicPath.replace(rasterExtensions, '.webp');
					replacements.set(publicPath, webpPath);
				}),
			);

			const assetFiles = (await getFiles(outputDirectory)).filter((file) =>
				productionAssetExtensions.test(file),
			);
			await Promise.all(
				assetFiles.map(async (assetFile) => {
					let content = await readFile(assetFile, 'utf8');
					for (const [sourcePath, webpPath] of replacements) {
						content = content.replaceAll(sourcePath, webpPath);
					}
					await writeFile(assetFile, content);
				}),
			);
		},
	};
}

export default defineConfig({
	server: { open: 'http://localhost:5173/' },
	build: {
		emptyOutDir: true,
		sourcemap: false,
		cssCodeSplit: true,
		reportCompressedSize: true,
		chunkSizeWarningLimit: 350,
	},
	plugins: [
		react(),
		ViteImageOptimizer({
			includePublic: true,
			// Raster assets are converted in the following plugin so originals are never overwritten.
			test: /\.svg$/i,
		}),
		generateProductionWebp(),
	],
});
