 Feature: Create New Entitlement Attribute  
             Assert the Entitlement Attribute Creation function  
      
    Scenario Outline: Create Entitlement Attribute  AttrName 
        Given Go to Free Defined Attributes Configuration Page   
        When  Click Create Button
        And   Input Attribute Name "<AttrName>" ID "<AttrID>" Description "<Description>" Choose Category, Data Type, Unit and Value List
        And   Click Publish Button
        Then  Check ExpectedResult "<ExpectedResult>"
        
     Examples: Create Entitlement Attribute  AttrName
    | AttrName   | AttrID     | Description    | ExpectedResult      | 
    | attr811    | ID811      | for test       | Create successfully | 
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         