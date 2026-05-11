sap.ui.define([
    "sap/m/library",
    "sap/base/i18n/ResourceBundle"
], function (mobileLibrary, ResourceBundle) {
    "use strict";

    return {

        /*  Set format for Send Email link. 
            Prerequisite: set Outlook as default mailto in Windows */
        formatEmail: function (sEid) {

            //changed to get ResourceBundle from model initialization
            var oBundle = ResourceBundle.create({
                url: sap.ui.require.toUrl("sapips/training/jsonbinding/i18n/i18n.properties")
            });

            return mobileLibrary.URLHelper.normalizeEmail(
                sEid + oBundle.getText("domain"),
                oBundle.getText("mailSubject", [sEid]),
                oBundle.getText("mailBody")
            );


        },

        
        /* Calculate the total stock value = unit price * stock + PHP */
        formatStockValue: function (fUnitPrice, iStockLevel, sCurrCode) {
            if (!fUnitPrice || !iStockLevel) {
                return "";
            }

            return (fUnitPrice * iStockLevel) + " " + sCurrCode;
        }

    };
});
