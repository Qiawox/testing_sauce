describe('template spec', () => {

  it('вход 2 товара выход', () => {
    cy.visit('https://www.saucedemo.com/')
    const Username = 'standard_user';
    const Password = 'secret_sauce';

    cy.get('[data-test=username]').type(`${Username}{enter}`)
    cy.get('[data-test=password]').type(`${Password}{enter}`)
    cy.get('[data-test=login-button]').click()
    cy.get('.inventory_list .inventory_item [data-test=add-to-cart-sauce-labs-backpack]').click()
    cy.get('.inventory_list .inventory_item [data-test=add-to-cart-sauce-labs-onesie]').click()
    cy.get('#react-burger-menu-btn').click()
    cy.get('#logout_sidebar_link').click()
  });

  it('вход 3 товара', () => {
    cy.visit('https://www.saucedemo.com/')
    const Username = 'standard_user';
    const Password = 'secret_sauce';
    cy.get('[data-test=username]').type(`${Username}{enter}`)
    cy.get('[data-test=password]').type(`${Password}{enter}`)
    cy.get('[data-test=login-button]').click()
    cy.get('.inventory_list .inventory_item [data-test=add-to-cart-sauce-labs-backpack]').click()
    cy.get('.inventory_list .inventory_item [data-test=add-to-cart-sauce-labs-onesie]').click()
    cy.get('.inventory_list .inventory_item [data-test=add-to-cart-sauce-labs-bike-light]').click()
  });
  
  it('вход 2 товара 1 убрать', () => {
    // cy.visit('https://www.saucedemo.com/')
    const Username = 'standard_user';
    const Password = 'secret_sauce';
    cy.get('[data-test=username]').type(`${Username}{enter}`)
    cy.get('[data-test=password]').type(`${Password}{enter}`)
    cy.get('[data-test=login-button]').click()
    cy.get('.inventory_list .inventory_item [data-test=add-to-cart-sauce-labs-backpack]').click()
    cy.get('.inventory_list .inventory_item [data-test=add-to-cart-sauce-labs-bolt-t-shirt]').click()
    cy.get('.inventory_list .inventory_item [data-test=remove-sauce-labs-backpack]').click()
  });
  
  it('вход 1 товар переход в коризну оформление', () => {
    // cy.visit('https://www.saucedemo.com/')
    const Username = 'standard_user';
    const Password = 'secret_sauce';
    const FirstName = 'Egor';
    const LastName = 'Khozyashev';
    const postalCode = '123';
    cy.get('[data-test=username]').type(`${Username}{enter}`)
    cy.get('[data-test=password]').type(`${Password}{enter}`)
    cy.get('[data-test=login-button]').click()
    cy.get('.inventory_list .inventory_item [data-test=add-to-cart-sauce-labs-backpack]').click()
    cy.get('.shopping_cart_link').click()
    cy.get('.checkout_button').click()
    cy.get('[data-test=firstName]').type(`${FirstName}`)
    cy.get('[data-test=lastName]').type(`${LastName}`)
    cy.get('[data-test=postalCode]').type(`${postalCode}`)
    cy.get('[data-test=continue]').click()
    cy.get('[data-test=finish]').click()
    cy.get('[data-test=back-to-products]').click()
  });

  it('вход 4 товара корзина убирает 2 оформление', () => {
    // cy.visit('https://www.saucedemo.com/')
    const Username = 'standard_user';
    const Password = 'secret_sauce';
    const FirstName = 'Egor';
    const LastName = 'Khozyashev';
    const postalCode = '123';
    cy.get('[data-test=username]').type(`${Username}{enter}`)
    cy.get('[data-test=password]').type(`${Password}{enter}`)
    cy.get('[data-test=login-button]').click()
    cy.get('.inventory_list .inventory_item [data-test=add-to-cart-sauce-labs-bike-light]').click()
    cy.get('.inventory_list .inventory_item [data-test=add-to-cart-sauce-labs-onesie]').click()
    cy.get('.inventory_list .inventory_item [data-test=add-to-cart-sauce-labs-fleece-jacket]').click()
    cy.get('.inventory_list .inventory_item [data-test=add-to-cart-sauce-labs-bolt-t-shirt]').click()
    cy.get('.shopping_cart_link').click()
    cy.get('.cart_list .cart_item [data-test=remove-sauce-labs-bolt-t-shirt]').click()
    cy.get('.cart_list .cart_item [data-test=remove-sauce-labs-bike-light').click()
    cy.get('[data-test=checkout]').click()
    cy.get('[data-test=firstName]').type(`${FirstName}`)
    cy.get('[data-test=lastName]').type(`${LastName}`)
    cy.get('[data-test=postalCode]').type(`${postalCode}`)
    cy.get('[data-test=continue]').click()
    cy.get('[data-test=finish]').click()
    cy.get('[data-test=back-to-products]').click()
  });
  
  it('вход 2 товара корзина выход 1 товар корзина оформление', () => {
    // cy.visit('https://www.saucedemo.com/')
    const Username = 'standard_user';
    const Password = 'secret_sauce';
    const FirstName = 'Egor';
    const LastName = 'Khozyashev';
    const postalCode = '123';
    cy.get('[data-test=username]').type(`${Username}{enter}`)
    cy.get('[data-test=password]').type(`${Password}{enter}`)
    cy.get('[data-test=login-button]').click()
    cy.get('.inventory_list .inventory_item [data-test=add-to-cart-sauce-labs-bolt-t-shirt]').click()
    cy.get('.inventory_list .inventory_item [data-test=add-to-cart-sauce-labs-fleece-jacket]').click()
    cy.get('.shopping_cart_link').click()
    cy.get('[data-test=continue-shopping]').click()
    cy.get('.inventory_list .inventory_item [data-test=add-to-cart-sauce-labs-onesie]').click()
    cy.get('.shopping_cart_link').click()
    cy.get('[data-test=checkout]').click()
    cy.get('[data-test=firstName]').type(`${FirstName}`)
    cy.get('[data-test=lastName]').type(`${LastName}`)
    cy.get('[data-test=postalCode]').type(`${postalCode}`)
    cy.get('[data-test=continue]').click()
    cy.get('[data-test=finish]').click()
    cy.get('[data-test=back-to-products]').click()
  });
  

  
})