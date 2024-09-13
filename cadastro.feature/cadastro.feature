#language: PT
Feature: Preenchimento de formulário de cadastro

  Scenario: Preenchendo o formulário de cadastro
    Given Eu acesso a página de cadastro
    When E preencho os dados corretamente 
    And E clico no botão submit
    Then Meu cadastro é finalizado