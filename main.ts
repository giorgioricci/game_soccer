input.onButtonPressed(Button.A, function () {
    giocatore.move(-1)
    music.playTone(262, music.beat(BeatFraction.Whole))
})
input.onButtonPressed(Button.B, function () {
    giocatore.move(1)
    music.playTone(262, music.beat(BeatFraction.Whole))
})
let giocatore: game.LedSprite = null
music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
game.setScore(0)
let porta = game.createSprite(randint(0, 4), 0)
giocatore = game.createSprite(randint(0, 4), 4)
basic.forever(function () {
    for (let index = 0; index < 5; index++) {
        basic.pause(500)
        giocatore.change(LedSpriteProperty.Y, -1)
    }
    if (giocatore.isTouching(porta)) {
        game.addScore(1)
        giocatore = game.createSprite(randint(0, 4), 4)
    } else {
        giocatore.delete()
        basic.showIcon(IconNames.No)
        giocatore = game.createSprite(randint(0, 4), 4)
    }
    if (game.score() == 10) {
        game.gameOver()
    }
})
