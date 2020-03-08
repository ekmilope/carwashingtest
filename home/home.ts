import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { LoginPage } from '../login/login';
import { RecoverPasswordPage } from '../recover-password/recover-password';
import { RequestCarWashingServicePage } from '../request-car-washing-service/request-car-washing-service';
import { PaymentPage } from '../payment/payment';
import { NotificationOfWashingRequestPage } from '../notification-of-washing-request/notification-of-washing-request';
import { NotificationOfWashingAcceptancePage } from '../notification-of-washing-acceptance/notification-of-washing-acceptance';
import { CarWashingStatusPage } from '../car-washing-status/car-washing-status';
import { SettingsForCarWasherPage } from '../settings-for-car-washer/settings-for-car-washer';
import { DisclaimerWithTestPhotoTakingPage } from '../disclaimer-with-test-photo-taking/disclaimer-with-test-photo-taking';
import { ScoreCarWasherPage } from '../score-car-washer/score-car-washer';
import { CarWashingListPage } from '../car-washing-list/car-washing-list';
import { ManageCarWashersAndClientsPage } from '../manage-car-washers-and-clients/manage-car-washers-and-clients';
import { ManageUserProfilePage } from '../manage-user-profile/manage-user-profile';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }
  goToRegister(params){
    if (!params) params = {};
    this.navCtrl.push(RegisterPage);
  }goToLogin(params){
    if (!params) params = {};
    this.navCtrl.push(LoginPage);
  }goToRecoverPassword(params){
    if (!params) params = {};
    this.navCtrl.push(RecoverPasswordPage);
  }goToRequestCarWashingService(params){
    if (!params) params = {};
    this.navCtrl.push(RequestCarWashingServicePage);
  }goToPayment(params){
    if (!params) params = {};
    this.navCtrl.push(PaymentPage);
  }goToNotificationOfWashingRequest(params){
    if (!params) params = {};
    this.navCtrl.push(NotificationOfWashingRequestPage);
  }goToNotificationOfWashingAcceptance(params){
    if (!params) params = {};
    this.navCtrl.push(NotificationOfWashingAcceptancePage);
  }goToCarWashingStatus(params){
    if (!params) params = {};
    this.navCtrl.push(CarWashingStatusPage);
  }goToSettingsForCarWasher(params){
    if (!params) params = {};
    this.navCtrl.push(SettingsForCarWasherPage);
  }goToDisclaimerWithTestPhotoTaking(params){
    if (!params) params = {};
    this.navCtrl.push(DisclaimerWithTestPhotoTakingPage);
  }goToScoreCarWasher(params){
    if (!params) params = {};
    this.navCtrl.push(ScoreCarWasherPage);
  }goToCarWashingList(params){
    if (!params) params = {};
    this.navCtrl.push(CarWashingListPage);
  }goToManageCarWashersAndClients(params){
    if (!params) params = {};
    this.navCtrl.push(ManageCarWashersAndClientsPage);
  }goToManageUserProfile(params){
    if (!params) params = {};
    this.navCtrl.push(ManageUserProfilePage);
  }
}
