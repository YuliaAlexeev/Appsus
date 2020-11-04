'use strict';
import { utilService } from '../../../js/services/util-service.js';


export const mailService = {
    getEmails,
    getEmailById
  }





var gEmails = _createEmails();

function getEmails(){
    return Promise.resolve(gEmails);
}

function getEmailById(emailId){
    var email = gEmails.find(email => email.id === emailId);
    return Promise.resolve(email);
}








function _createEmails(){
    var emails = [
        {id: utilService.makeId(), subject: '1Wassap?', body: 'Pick up!', isRead: false, sentAt : 1551133930594},
        {id: utilService.makeId(), subject: '2Wassap?', body: 'Pick up!', isRead: false, sentAt : 1551133930595},
        {id: utilService.makeId(), subject: '3Wassap?', body: 'Pick up!', isRead: false, sentAt : 1551133930596},
        {id: utilService.makeId(), subject: '4Wassap?', body: 'Pick up!', isRead: false, sentAt : 1551133930597},
        {id: utilService.makeId(), subject: '5Wassap?', body: 'Pick up!', isRead: false, sentAt : 1551133930598}
    ];

    return emails;
}