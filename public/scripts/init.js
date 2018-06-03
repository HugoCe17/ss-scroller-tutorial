function init() {
  console.log('Initializing...');
  const gameCanvas = document.getElementById('game-canvas');
  const stage = new PIXI.Container();
  const cWidth = gameCanvas.width;
  const cHeight = gameCanvas.height;

  const renderer = PIXI.autoDetectRenderer(cWidth, cHeight, {
    view: gameCanvas,
  });

  const farTexture = PIXI.Texture.fromImage('../resources/bg-far.png');
  const far = new PIXI.extras.TilingSprite(farTexture, 512, 256);

  far.position.x = 0;
  far.position.y = 0;
  far.tilePosition.x = 0;
  far.tilePosition.y = 0;
  stage.addChild(far);

  const midTexture = PIXI.Texture.fromImage('../resources/bg-mid.png');
  const mid = new PIXI.extras.TilingSprite(midTexture, 512, 256);
  mid.position.x = 0;
  mid.position.y = 128;
  mid.tilePosition.x = 0;
  mid.tilePosition.y = 0;
  stage.addChild(mid);

  requestAnimationFrame(update);

  function update() {
    far.tilePosition.x -= 0.128;
    mid.tilePosition.x -= 0.63;

    renderer.render(stage);

    requestAnimationFrame(update);
  }
}
