describe('template spec', () => {
  beforeEach('passes', () => {
    cy.visit('https://www.saucedemo.com/')
  })
  it('вход 2 товара выход', () => {
    const Username = 'standard_user';
    const Password = 'secret_sauce';

    cy.get('[data-test=username]').type(`${Username}{enter}`)
    cy.get('[data-test=password]').type(`${Password}{enter}`)
    cy.click('.submit_button')
    cy.get('.inventory_list .inventory_item').eq(0).click('.btm_primary')
    cy.get('.inventory_list .inventory_item').eq(4).click('.btm_primary')
    cy.click('#react-burger-menu-btn')
    cy.click('#logout_sidebar_link')
  });

  it('вход 3 товара', () => {
    const Username = 'standard_user';
    const Password = 'secret_sauce';
    cy.get('[data-test=username]').type(`${Username}{enter}`)
    cy.get('[data-test=password]').type(`${Password}{enter}`)
    cy.click('.submit_button')
    cy.get('.inventory_list .inventory_item').eq(0).click('.btm_primary')
    cy.get('.inventory_list .inventory_item').eq(4).click('.btm_primary')
    cy.get('.inventory_list .inventory_item').eq(1).click('.btm_primary')
  });
  
  it('вход 2 товара 1 убрать', () => {
    const Username = 'standard_user';
    const Password = 'secret_sauce';
    cy.get('[data-test=username]').type(`${Username}{enter}`)
    cy.get('[data-test=password]').type(`${Password}{enter}`)
    cy.click('.submit_button')
    cy.get('.inventory_list .inventory_item').eq(0).click('.btm_primary')
    cy.get('.inventory_list .inventory_item').eq(2).click('.btm_primary')
    cy.get('.inventory_list .inventory_item').eq(0).click('btn_secondary')
  });
  
  it('вход 1 товар переход в коризну оформление', () => {
    const Username = 'standard_user';
    const Password = 'secret_sauce';
    const FirstName = 'Egor';
    const LastName = 'Khozyashev';
    const postalCode = '123';
    cy.get('[data-test=username]').type(`${Username}{enter}`)
    cy.get('[data-test=password]').type(`${Password}{enter}`)
    cy.click('.submit_button')
    cy.get('.inventory_list .inventory_item').eq(0).click('.btm_primary')
    cy.click('.shopping_cart_link')
    cy.click('.checkout_button')
    cy.get('[data-test=firstName]').type(`${FirstName}{enter}`)
    cy.get('[data-test=lastName]').type(`${LastName}{enter}`)
    cy.get('[data-test=postalCode]').type(`${postalCode}{enter}`)
    cy.click('[data-test=continue]')
    cy.click('[data-test=finish]')
    cy.click('[data-test=back-to-products]')
  });

  it('вход 4 товара корзина убирает 2 оформление', () => {
    const Username = 'standard_user';
    const Password = 'secret_sauce';
    const FirstName = 'Egor';
    const LastName = 'Khozyashev';
    const postalCode = '123';
    cy.get('[data-test=username]').type(`${Username}{enter}`)
    cy.get('[data-test=password]').type(`${Password}{enter}`)
    cy.click('.submit_button')
    cy.get('.inventory_list .inventory_item').eq(5).click('.btm_primary')
    cy.get('.inventory_list .inventory_item').eq(4).click('.btm_primary')
    cy.get('.inventory_list .inventory_item').eq(3).click('.btm_primary')
    cy.get('.inventory_list .inventory_item').eq(2).click('.btm_primary')
    cy.click('.shopping_cart_link')
    cy.get('.cart_list .cart_item').eq(5).click('.btn_secondary')
    cy.get('.cart_list .cart_item').eq(2).click('.btn_secondary')
    cy.click('[data-test=checkout]')
    cy.click('[data-test=checkout]')
    cy.get('[data-test=firstName]').type(`${FirstName}{enter}`)
    cy.get('[data-test=lastName]').type(`${LastName}{enter}`)
    cy.get('[data-test=postalCode]').type(`${postalCode}{enter}`)
    cy.click('[data-test=continue]')
    cy.click('[data-test=finish]')
    cy.click('[data-test=back-to-products]')
  });
  
  it('вход 2 товара корзина выход 1 товар корзина оформление', () => {
    const Username = 'standard_user';
    const Password = 'secret_sauce';
    const FirstName = 'Egor';
    const LastName = 'Khozyashev';
    const postalCode = '123';
    cy.get('[data-test=username]').type(`${Username}{enter}`)
    cy.get('[data-test=password]').type(`${Password}{enter}`)
    cy.click('.submit_button')
    cy.get('.inventory_list .inventory_item').eq(2).click('.btm_primary')
    cy.get('.inventory_list .inventory_item').eq(3).click('.btm_primary')
    cy.click('.shopping_cart_link')
    cy.click('[data-test=continue-shopping]')
    cy.get('.inventory_list .inventory_item').eq(4).click('.btm_primary')
    cy.click('.shopping_cart_link')
    cy.click('[data-test=checkout]')
    cy.get('[data-test=firstName]').type(`${FirstName}{enter}`)
    cy.get('[data-test=lastName]').type(`${LastName}{enter}`)
    cy.get('[data-test=postalCode]').type(`${postalCode}{enter}`)
    cy.click('[data-test=continue]')
    cy.click('[data-test=finish]')
    cy.click('[data-test=back-to-products]')
  });
  

  
})