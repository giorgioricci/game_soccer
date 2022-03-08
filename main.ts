input.onButtonPressed(Button.A, function () {
    giocatore.move(-1)
    music.playTone(262, music.beat(BeatFraction.Sixteenth))
})
input.onButtonPressed(Button.B, function () {
    giocatore.move(1)
    music.playTone(262, music.beat(BeatFraction.Sixteenth))
})
let giocatore: game.LedSprite = null
music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.OnceInBackground)
game.setScore(0)
let porta = game.createSprite(randint(0, 4), 0)
giocatore = game.createSprite(randint(0, 4), 4)
basic.forever(function () {
    music.setVolume(1)
    for (let index = 0; index < 5; index++) {
        basic.pause(500)
        giocatore.change(LedSpriteProperty.Y, -1)
    }
    if (giocatore.isTouching(porta)) {
        music.playTone(988, music.beat(BeatFraction.Eighth))
        game.addScore(1)
        giocatore.delete()
        porta.delete()
        giocatore = game.createSprite(randint(0, 4), 4)
        porta = game.createSprite(randint(0, 4), 0)
    } else {
        giocatore.delete()
        porta.delete()
        music.playTone(131, music.beat(BeatFraction.Eighth))
        basic.showIcon(IconNames.No)
        giocatore = game.createSprite(randint(0, 4), 4)
        porta = game.createSprite(randint(0, 4), 0)
    }
    if (game.score() == 10) {
        game.gameOver()
    }
})
