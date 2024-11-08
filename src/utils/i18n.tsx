import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    en: {
      translation: {
        membershipPageTitle: "Membership Services",
        membershipSubtitle: "Access exclusive benefits and features",
        memberRegistrationTitle: "New Member Registration",
        memeberRegistrationSubtitle: "Please fill in the details to register as a new member",
        firstNameTitle: "First Name",
        firstNameFormFiller: "Asadullah",
        firstNameValidationError: "First Name is required",
        lastNameTitle: "Last Name",
        lastNameFormFiller: "Avaei",
        lastNameValidationError: "Last Name is required",
        emailTitle: "Email",
        emailFormFiller: "asadullah.avaei@gmail.com",
        emailValidationError:"Email is required",
        transactionReferenceTitle: "Transaction Reference",
        transactionReferenceValidationError: "Transaction Reference is required",
        transactionFormFiller: "TR-12345",
        transactionTitle: "Transaction Reference",
        transactionInfo: 'Please transfer the membership fee and type the same transaction reference here.',
        renewMembershipTitle: "Renew Membership",
        renewMembershipSubtitle: "Please provide the following data to renew your membership",
        transactionDateTitle: "Transaction Date",
        transactionDateValidationError: "Transaction Date is required",
        renewBrn: 'Renew Membership',
        qrCodeTitle: 'Reissue QR Code',
        qrCodeSubtitle: 'Enter your email address to request a new QR code',
        qrCodeBtn: "Reissue Membership QR Code",
        membershipBtn: "Become a Member",
        registrationBtn: "Register New Member",
        copyRight: "2024 Manchester Islamic Centre. All rights reserved."
      }
    },
    fr: {
      translation: {
        "Welcome to React": "Bienvenue à React et react-i18next"
      }
    }
  };
  
  i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
      resources,
      lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
      // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
      // if you're using a language detector, do not define the lng option
  
      interpolation: {
        escapeValue: false // react already safes from xss
      }
    });
  
export default i18n;