import { Task } from 'molstar/lib/mol-task';
import { Box3D } from 'molstar/lib/mol-math/geometry';
import { GraphicsRenderObject } from 'molstar/lib/mol-gl/render-object';
import { HeadlessPluginContext } from "molstar/lib/mol-plugin/headless-plugin-context";
import { GlbExporter } from "molstar/lib/extensions/geo-export/glb-exporter";
import { DefaultPluginSpec, PluginSpec } from 'molstar/lib/mol-plugin/spec';
import { setCanvasModule } from 'molstar/lib/mol-geo/geometry/text/font-atlas';
import { ExternalModules, defaultCanvas3DParams } from 'molstar/lib/mol-plugin/util/headless-screenshot';
import { setFSModule } from 'molstar/lib/mol-util/data-source';
import fs from 'fs';
import gl from 'gl';

setFSModule(fs);
setCanvasModule(require('canvas'));

const renderObjectExporter = new GlbExporter(Box3D());

const renderObjects: GraphicsRenderObject[] = [];

const externalModules: ExternalModules = { gl };
const spec = DefaultPluginSpec();
const plugin = new HeadlessPluginContext(externalModules, spec);

plugin.init().then(() => {
    plugin.runTask(Task.create('Export Geometry', async ctx => {
        for (let i = 0, il = renderObjects.length; i < il; ++i) {
            await renderObjectExporter.add(renderObjects[i], plugin.canvas3d?.webgl!, ctx);
        }
    }));
})








