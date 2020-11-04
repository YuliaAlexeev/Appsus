'use strict';
import { utilService } from '../../../js/services/util-service.js';


export const mailService = {
    getEmails,
    getEmailById
  }





var gEmails = _createEmails();

function getEmails(dir){
    return Promise.resolve(gEmails);
}

function getEmailById(emailId){
    var email = gEmails.find(email => email.id === emailId);
    return Promise.resolve(email);
}








function _createEmails(){
    var emails = [
        {id: utilService.makeId(), sender:'Puki', subject: 'Important', body: 'Pick up!', isRead: false, isStarred: false, isDeleted: false, isSent: true, sentAt : 1551133930594},
        {id: utilService.makeId(), sender:'Wolt', subject: 'New food on Wolt', body: 'Pick up!', isRead: true, isStarred: true, isDeleted: false, isSent: true, sentAt : 1551133930595},
        {id: utilService.makeId(), sender:'AllJobs', subject: 'Looking for a job?', body: 'Pick up!', isRead: false, isStarred: false, isDeleted: false, isSent: false, sentAt : 1551133930596},
        {id: utilService.makeId(), sender:'Tuki', subject: 'Check it out', body: 'Pick up!', isRead: false, isStarred: false, isDeleted: false, isSent: false, sentAt : 1551133930597},
        {id: utilService.makeId(), sender:'Buki', subject: 'Wassap?', body: 'Pick up!', isRead: false, isStarred: false, isDeleted: false, isSent: false, sentAt : 1551133930598}
    ];

    return emails;
}