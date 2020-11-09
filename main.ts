controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (flyer == false) {
        flyer = true
        // This is Gravity
        mySprite.ay = 0
    } else {
        flyer = false
        // This is Gravity
        mySprite.ay = 6660
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.greenInnerSouthEast, function (sprite, location) {
    mySprite.setPosition(100, 300)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    sword_activated = 1
    mySprite.setImage(img`
        . . . . . . . . . . 5 . 
        . . . . . . . . . . 2 . 
        . . . e e e . . . . 2 . 
        . . . f d f . . . . 2 . 
        . . . d d d . . . . 2 . 
        . . f f f f f . . 4 4 4 
        f f f 1 f f f f f f d . 
        f . f f f f f . . . 4 . 
        d . . f . f . . . . . . 
        . . . f . f . . . . . . 
        . . . f . f . . . . . . 
        . . . . . . . . . . . . 
        `)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.greenInnerSouthWest, function (sprite, location) {
    mySprite.setPosition(100, 100)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleBlueCrystal, function (sprite, location) {
    info.changeScoreBy(6)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    info.changeScoreBy(6)
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    sword_activated = 0
    mySprite.setImage(img`
        . . . . . . . . . . 1 . 
        . . . . . . . . . . 1 . 
        . . . e e e . . . . 1 . 
        . . . f d f . . . . 1 . 
        . . . d d d . . . . 1 . 
        . . f f f f f . . 4 4 4 
        f f f 1 f f f f f f d . 
        f . f f f f f . . . 4 . 
        d . . f . f . . . . . . 
        . . . f . f . . . . . . 
        . . . f . f . . . . . . 
        . . . . . . . . . . . . 
        `)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
    info.changeScoreBy(3)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestOpen, function (sprite, location) {
    info.changeScoreBy(3)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleInsignia, function (sprite, location) {
    game.over(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (sword_activated == 1) {
        mySprite2.destroy()
    }
})
let GOING_UP = ""
let mySprite2: Sprite = null
let sword_activated = 0
let flyer = false
let mySprite: Sprite = null
music.setVolume(30)
mySprite = sprites.create(img`
    . . . . . . . . . . 1 . 
    . . . . . . . . . . 1 . 
    . . . e e e . . . . 1 . 
    . . . f d f . . . . 1 . 
    . . . d d d . . . . 1 . 
    . . f f f f f . . 4 4 4 
    f f f 1 f f f f f f d . 
    f . f f f f f . . . 4 . 
    d . . f . f . . . . . . 
    . . . f . f . . . . . . 
    . . . f . f . . . . . . 
    . . . . . . . . . . . . 
    `, SpriteKind.Player)
mySprite.setPosition(6, 400)
scene.setBackgroundColor(8)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
tiles.setTilemap(tiles.createTilemap(hex`1200200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001f1f1f0000000000000000000000000000001f1f1f0000000000000000000000000000001f1f1f0000000608000a00000000000000001d1e0000001c1c1c1c1c00000000000000001d1e0000001c0b1b1c1c000000100f0000001d1e00001c0b1c0b0b0b00000012110109001d1e000b0b0b0b0b1c0b0b0b0b1b1b0b1b1c0b1b1c0b0b0b0b0b0b0b050b0505050505050c050505050b050518040d000000000016060000070e0000000d00190000000000000000000007000000000000190000000000000000000007000000000000190000000000000000100f07000000000000190000000000000000121107000000000000190000000000000000000007130000000000190000000000000000001507000000000000190000000000000000000007000000000000190000000000000000000007000000000000190000000000000000001407000000000000190000000000000000000705000000000000190000000000000000000007000000000000190000000000000000000000000000000000190006000800001700000900000100000a001903020202020202020202020202020204021a`, img`
    ..................
    ..................
    ..................
    ..................
    ..................
    ..................
    ..................
    ..................
    ........222.......
    ........222.......
    ........222.......
    .............22222
    .............22222
    ............222222
    ...........2222222
    222222222222222222
    222222222222222222
    2.........22...2.2
    ..........2......2
    ..........2......2
    ..........2......2
    ..........2......2
    ..........22.....2
    .........22......2
    ..........2......2
    ..........2......2
    .........22......2
    .........22......2
    ..........2......2
    .................2
    .................2
    222222222222222222
    `, [myTiles.transparency16,sprites.dungeon.chestClosed,sprites.dungeon.darkGroundNorth,sprites.dungeon.darkGroundNorthWest0,sprites.dungeon.darkGroundNorthEast0,sprites.dungeon.darkGroundCenter,sprites.dungeon.chestOpen,sprites.dungeon.darkGroundWest,sprites.dungeon.collectibleRedCrystal,sprites.dungeon.collectibleBlueCrystal,sprites.dungeon.collectibleInsignia,sprites.castle.tileGrass1,sprites.castle.tilePath5,sprites.builtin.oceanDepths8,sprites.dungeon.greenOuterSouth2,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenInnerNorthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenOuterEast2,sprites.dungeon.greenOuterNorth2,sprites.dungeon.greenOuterWest2,sprites.castle.rock2,sprites.castle.rock1,sprites.dungeon.darkGroundSouth,sprites.dungeon.darkGroundEast,sprites.dungeon.darkGroundSouthEast0,sprites.castle.tileGrass2,sprites.castle.tileGrass3,myTiles.tile1,myTiles.tile2,myTiles.tile3], TileScale.Sixteen))
// This is Gravity
mySprite.ay = 66
flyer = false
game.onUpdateInterval(2000, function () {
    mySprite2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . 5 . 
        . . . . . . 7 7 7 . . . . . 4 . 
        . . . . . . 7 7 7 . . . . . 4 . 
        . . . . . . 7 7 7 7 7 . . . 2 . 
        . . . . . 7 7 7 7 7 7 . . 2 2 2 
        7 7 7 7 7 7 5 4 5 7 7 7 7 7 7 . 
        . . . . 7 7 7 7 7 7 7 . . . 2 . 
        . . . . . 7 1 7 1 7 . . . . . . 
        . . . . . . 7 7 7 . . . . . . . 
        . . . . . . 7 . 7 . . . . . . . 
        . . . . . . 7 . 7 . . . . . . . 
        . . . . . . 7 . 7 . . . . . . . 
        . . . . . . 7 . 7 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    // This is Gravity
    mySprite2.ay = 66
    mySprite2.setPosition(randint(0, 200), randint(0, 450))
})
forever(function () {
    GOING_UP = "F E A B G C F E "
    music.playMelody(GOING_UP, 120)
})
