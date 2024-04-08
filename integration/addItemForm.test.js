describe('add item form', () => {
  it('base sample, should look correct visually', async () => {
    await page.goto(
      'http://localhost:6006/iframe.html?id=add-item-form-component--add-item-form-base-example&viewMode=story'
    );
    const image = await page.screenshot();

    expect(image).toMatchImageSnapshot();
  });
});
