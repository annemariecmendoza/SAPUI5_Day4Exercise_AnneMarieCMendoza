sap.ui.define([
    "sap/m/library"
], function (mobileLibrary) {
    "use strict";

    return {

        /*  Set format for Send Email link. 
            Prerequisite: set Outlook as default mailto in Windows */
        formatEmail: function (sEid) {
            if (!sEid) {
                return "";
            }

           return mobileLibrary.URLHelper.normalizeEmail(
                sEid + "@accenture.com",
                "Test email to " + sEid,
                "Hi! How are you?"
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
