#!/usr/bin/env node

/**
 * Script to decompress Unity WebGL .br files
 * This helps with compatibility issues where servers don't properly handle Brotli compression
 */

const fs = require('fs')
const path = require('path')
const zlib = require('zlib')

const unityPath = path.join(__dirname, '../public/unity/kitchen-chaos')

// Files to decompress
const filesToDecompress = [
  'Build.data.br',
  'Build.framework.js.br',
  'Build.wasm.br',
]

console.log('🔧 Decompressing Unity WebGL files...')

filesToDecompress.forEach((fileName) => {
  const compressedPath = path.join(unityPath, fileName)
  const decompressedPath = path.join(unityPath, fileName.replace('.br', ''))

  if (fs.existsSync(compressedPath)) {
    try {
      const compressedData = fs.readFileSync(compressedPath)
      const decompressedData = zlib.brotliDecompressSync(compressedData)
      fs.writeFileSync(decompressedPath, decompressedData)
      console.log(
        `✅ Decompressed: ${fileName} -> ${fileName.replace('.br', '')}`,
      )
    } catch (error) {
      console.error(`❌ Failed to decompress ${fileName}:`, error.message)
    }
  } else {
    console.log(`⚠️  File not found: ${fileName}`)
  }
})

console.log('🎮 Unity files ready for WebGL!')
