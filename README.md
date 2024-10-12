molstar-playground
==================
### Using
- [molstar/molstar: A comprehensive macromolecular library](https://github.com/molstar/molstar)

### Tutorials
- Use headlessly
  - [PDBeurope/pdb-images: Generates images from mmCIF/BCIF files](https://github.com/PDBeurope/pdb-images)
    - [pdb-images/src/save.ts at e7bb92534136cbfb09a486ceea3643f67a08ecfe · PDBeurope/pdb-images](https://github.com/PDBeurope/pdb-images/blob/e7bb92534136cbfb09a486ceea3643f67a08ecfe/src/save.ts#L9)

- https://github.com/molstar/molstar/blob/master/src/tests/browser/render-structure-grid.ts
```js
    const file = await parseSdf(await downloadPubChemSdf(cid));
    const models = await trajectoryFromSdf(file.compounds[0]).run();
    const structure = Structure.ofModel(models.representative);
    const canvas3d = Canvas3D.create(ctx, { viewport });

    const repr = getRepr(BallAndStickRepresentationProvider, reprCtx);
    repr.setTheme({
        color: reprCtx.colorThemeRegistry.create('element-symbol', { structure }, {
            carbonColor: { name: 'element-symbol' }
        } as ColorTheme.BuiltInParams<'element-symbol'>),
        size: reprCtx.sizeThemeRegistry.create('physical', { structure })
    });

    await repr.createOrUpdate({
        ...BallAndStickRepresentationProvider.defaultValues,
        ...reprValues
    }, structure).run();
```
