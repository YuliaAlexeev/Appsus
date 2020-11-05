'use strict';
import { utilService } from '../../../js/services/util-service.js';


export const mailService = {
    getEmails,
    getEmailById,
    getEmptyMail,
    sendMail
  }





var gEmails = _createEmails();

function getEmails(){
    return Promise.resolve(gEmails);
}

function getEmailById(emailId){
    var email = gEmails.find(email => email.id === emailId);
    return Promise.resolve(email);
}

function getEmptyMail(){
    var newMailTemplate = {
        to: '', subject: '', body: ''
    }
    return newMailTemplate;
}

function sendMail(mailTemplate){
    var newMail = {
        id: utilService.makeId(), 
        sender:'Me', 
        to: mailTemplate.to,
        subject: mailTemplate.subject, 
        body: mailTemplate.body, 
        isRead: true, 
        isStarred: false, 
        isDeleted: false, 
        isSent: true, 
        sentAt : Date.now()
    }
    gEmails.push(newMail);
}



function _createEmails(){
    var emails = [
        {id: utilService.makeId(), sender:'Puki', to:'', subject: 'Important', body: 'Pick up!', isRead: false, isStarred: false, isDeleted: false, isSent: true, sentAt : 1551133930594},
        {id: utilService.makeId(), sender:'Wolt', to:'', subject: 'New food on Wolt', body: 'Pick up!', isRead: true, isStarred: true, isDeleted: false, isSent: true, sentAt : 1551133930595},
        {id: utilService.makeId(), sender:'AllJobs', to:'', subject: 'Looking for a job?', body: 'Pick up!', isRead: false, isStarred: false, isDeleted: false, isSent: false, sentAt : 1551133930596},
        {id: utilService.makeId(), sender:'Tuki', to:'', subject: 'Check it out', body: 'Pick up!', isRead: false, isStarred: false, isDeleted: false, isSent: false, sentAt : 1551133930597},
        {id: utilService.makeId(), sender:'Buki', to:'', subject: 'Wassap?', body: 'Pick up!', isRead: false, isStarred: false, isDeleted: false, isSent: false, sentAt : 1551133930598}
    ];

    return emails;
}