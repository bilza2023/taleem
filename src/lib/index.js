
import Taleem from "./presentation/taleemObject/Taleem"
import Editor from './presentation/editor/Editor.svelte';
import Player from './presentation/players/Player.svelte';
import SlideObject from "./slides/slideObject/slideObject";
import ItemsMap from "./slides/canvas/staticItems/ItemsMap";
import updateSlides from "./updateSlides/updateSlides";


import {
        healthCheckCanvas,
        CanvasEditor,
        CanvasPlayer,
        EqPlayer,
        EqsEditor
        } from './slides';

///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////

export {
    Taleem, // name may need changing
    SlideObject,
    Editor,
    Player,
    healthCheckCanvas, // name may need changing
    ItemsMap,

    CanvasEditor,
    CanvasPlayer,
    EqPlayer,
    EqsEditor,
    updateSlides
}