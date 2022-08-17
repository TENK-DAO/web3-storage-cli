
import { CarIndexedReader } from '@ipld/car';
import * as fs from 'fs/promises';
import { Web3Storage } from 'web3.storage'


export async function storeCarFile(filename: string, token: string) {
  const stats = await fs.stat(filename);
  const reader = await CarIndexedReader.fromFile(filename);
  let total = 0;
  function onStoredChunk(i: number) {
    total += i;
    console.log(`${((total / stats.size) * 100).toFixed(1)}%`);
  }
  const client = new Web3Storage({ token, endpoint: new URL('https://api.web3.storage') })
  return client.putCar(reader, { onStoredChunk });
}
