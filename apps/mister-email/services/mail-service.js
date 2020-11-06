'use strict';
import { utilService } from '../../../js/services/util-service.js';
import { storageService } from '../../../js/services/storage-service.js';

const MAIL_DB_KEY = 'mail_db';
var gEmails = storageService.loadFromStorage(MAIL_DB_KEY) || _createEmails();
var isReply = false;
var emailIdToReply = '';

export const mailService = {
    getEmails,
    getEmailById,
    getMailTemplate,
    sendMail,
    getUnreadNum,
    emailWasRead, 
    toggleStarEmail,
    checkEmail,
    deleteEmail,
    toggleReadEmail,
    replyToMail
  }

function getEmails(){
    return Promise.resolve(gEmails);
}

function replyToMail(emailId){
    isReply = true;
    emailIdToReply = emailId;
    console.log(isReply, emailId);
    return Promise.resolve('ok');
}

function getEmailById(emailId){
    var email = gEmails.find(email => email.id === emailId);
    return Promise.resolve(email);
}

function getMailTemplate(){
    var template;

    if(isReply && emailIdToReply){
        var email = gEmails.find(email => email.id === emailIdToReply);
        template = {
            id: emailIdToReply,
            to: email.sender,
            sender: 'mymail@gmail.com',
            subject: 'Re : ' + email.subject,
            body: '\n\n\n'+'Re ' + ':-----------------------------\n' + email.body,
        }
        isReply = false;
        emailIdToReply = '';
    }else{
        template = {
            to: '', subject: '', body: ''
        }
    }
    return template;
}

function sendMail(mailTemplate){
    console.log(mailTemplate);
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
    storageService.storeToStorage(MAIL_DB_KEY, gEmails);
}

function getUnreadNum(){
    var countUnread = 0;
    for(let i=0; i<gEmails.length; i++){
        if(!gEmails[i].isRead && gEmails[i].isInbox){
            countUnread++;
        }
    }

    return countUnread;
}

function emailWasRead(emailId){
    var mail = gEmails.find(mail => mail.id === emailId);
    mail.isRead = true;

    storageService.storeToStorage(MAIL_DB_KEY, gEmails);
}

function  toggleStarEmail(emailId){
    var mail = gEmails.find(mail => mail.id === emailId);
    mail.isStarred = !mail.isStarred;

    storageService.storeToStorage(MAIL_DB_KEY, gEmails);
}

function  checkEmail(emailId){
    var mail = gEmails.find(mail => mail.id === emailId);
    mail.isChecked = true;

    storageService.storeToStorage(MAIL_DB_KEY, gEmails);
}

function deleteEmail(emailId){
    var mail = gEmails.find(mail => mail.id === emailId);

    mail.isDeleted = true;
    mail.isSent = false;
    mail.isStarred = false;
    mail.isInbox = false;

    storageService.storeToStorage(MAIL_DB_KEY, gEmails);
    return Promise.resolve(`${emailId} deleted`);
    
}

function toggleReadEmail(emailId){
    var mail = gEmails.find(mail => mail.id === emailId);
    mail.isRead = !mail.isRead;

    storageService.storeToStorage(MAIL_DB_KEY, gEmails);
    return Promise.resolve(`${emailId} isRead toggled`);
}

function _createEmails(){
    var emails = [
        {id: utilService.makeId(), sender:'Puki', to:'', subject: 'Important', body: 'Pick up!', isRead: false, isInbox: false, isChecked: false, isStarred: false, isDeleted: false, isSent: true, sentAt : 1551133930594},
        {id: utilService.makeId(), sender:'Wolt', to:'', subject: 'New food on Wolt', body: 'Pick up!', isRead: true, isInbox: false, isChecked: false, isStarred: true, isDeleted: false, isSent: true, sentAt : 1551133930595},
        {id: utilService.makeId(), sender:'AllJobs', to:'mymail@gmail.com', subject: 'Looking for a job?', body: 'Pick up!', isRead: false, isInbox: true, isChecked: false, isStarred: false, isDeleted: false, isSent: false, sentAt : 1551133930596},
        {id: utilService.makeId(), sender:'Tuki', to:'mymail@gmail.com', subject: 'Check it out', body: 'Pick up!', isRead: false, isInbox: true, isChecked: false, isStarred: false, isDeleted: false, isSent: false, sentAt : 1551133930597},
        {id: utilService.makeId(), sender:'Buki', to:'mymail@gmail.com', subject: 'Wassap?', body: 'Pick up!', isRead: false, isInbox: true, isChecked: false, isStarred: false, isDeleted: false, isSent: false, sentAt : 1551133930598}
    ];

    storageService.storeToStorage(MAIL_DB_KEY, emails);
    return emails;
}