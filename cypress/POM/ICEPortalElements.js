export class ICEPortalElements{
    verifyTitleMain(titleMain){
        cy.get('span.title-main').contains(titleMain).scrollIntoView({ offset: { top: -400, left: 0 } }).then(data=>{
            expect(data).to.equal(titleMain)
        })
    }


    verifyFancyFeasting(){
        cy.get('[title="Fancy feasting?"]').find('.serviceBundleTileLarge-iconWrapper g').last().should('have.class', 'icon-style')
        .parents('.serviceBundleTileLarge-iconWrapper').siblings('.serviceBundleTileLarge-textWrapper').find('h3').should('contain', 'Fancy feasting?').siblings('p').should('contain', 'Satisfy small and large hunger now')
    }

    clickFancyFeasting(){
        cy.get('[title="Fancy feasting?"]').click()
    }

    verifyMenuItem(menuItem, menuItemDescription){
        cy.get('h3.restaurantMenuItem-title').each(($ele)=>{
            if($ele.text() === menuItem){
                cy.wrap($ele).should('have.text', menuItem).parents('div.restaurantMenuItem-titleWrapper').siblings('.restaurantMenuItem-description').should('contain', menuItemDescription)
            }
        })
    }

    clickBackButton(){
        cy.get('div.db-header .link-text').should('contain', 'back').click()
    }
}