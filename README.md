# CLI for using web3.storage

```bash
npm install -g web3-cli
```

## Pack directory into `.car` file

Content Addressable aRchive ([`.car`](https://github.com/ipld/js-car)) is an archive file that stores files in the same manner as IPFS. This makes uploading it to an IPFS compatible endpoint easy.

```bash
web3 pack <file or directory> --output <path/to/file.car> # default is ./index.car
```

Note: this will not include the directory in the file, e.g. if you had the following `dir/a`

```bash
web3 pack dir
```

generates `index.car` which includes `a` but not `dir`.

## Upload

Requires the environment variable `WEB3_STORAGE_API_TOKEN` or `--api-key ...` from [`nft.storage`](https://nft.storage)

```bash
web3 upload <path/to/file.car>
```
