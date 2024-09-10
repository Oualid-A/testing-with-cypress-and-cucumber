Feature: Marjane mall purchase

    As a user
    I want to buy a product from marjane mall

    Scenario: Purchase a product
        Given I open marjane mall website
        When I select category "Informatique"
        When I search for "laptop"
        When I select the product "DELL LATITUDE 5540 LAPTOP Performance Intel i5 processor 8GB memory 256GB SSD Software Windows 11 pro"
        Then The Product is in cart "DELL LATITUD 5540 LAPTOP Performance Intel i5 processor 8GB memory 256GB SSD Software Windows 11 pro" 