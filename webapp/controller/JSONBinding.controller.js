sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "../model/formatter"
], (Controller, formatter) => {
    "use strict";

    return Controller.extend("sapips.training.jsonbinding.controller.JSONBinding", {
        
       formatter: formatter,

        onInit: function () {

            // ---------------------------Bind address---------------------------- //

            // use onInit for pre-page loading of below values
            var addressData = {
                inpEid: "anne.marie.c.mendoza",
                cbxEnabled: true,
                Address: {
                    Street: "15 Font St",
                    City: "Metro Manila",
                    Zip: "1700",
                    Country: "Philippines"
                },
                SalesAmount: 15000,
                CurrencyCode: "PHP"
            };

            //set model binding for addressData
            var addressModel = new sap.ui.model.json.JSONModel(addressData);

            //set addressData to bind to view and name it as "address" because models can only handle one unnamed
            this.getView().setModel(addressModel, "address");

            // -----------------------Bind Products-----------------------------//
            //set model binding for Products.json               
            var productsModel = new sap.ui.model.json.JSONModel();

            productsModel.attachRequestCompleted(function () {
                console.log("Products loaded:", productsModel.getData());
            });

            productsModel.loadData("/model/Products.json");

            //set addressData to bind to view and name it as "products" because models can only handle one unnamed   
            this.getView().setModel(productsModel, "products");


        },

        //add row select event
        onRowSelect: function (listEvent) {

            var listSelectedItem = listEvent.getParameter("listItem");   // clicked row; listItem is predefined
            var listContext = listSelectedItem.getBindingContext("products"); // get data from products model

            this.getView().setBindingContext(listContext, "products"); // set context for form

        }


    });

});