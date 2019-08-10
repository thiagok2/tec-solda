import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ToastController, AlertController, LoadingController } from 'ionic-angular';

import { InspecaoElement, Inspecao } from '../../models/inspecao';

import { InspecaoProvider } from '../../providers/providers';
import { StorageFireProvider } from '../../providers/database/storagefire';
import { PdfCreateProvider } from '../../providers/create-pdf/pdf-create';
import { FileOpener } from '@ionic-native/file-opener';
import { File } from '@ionic-native/file';

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

declare var cordova: any;

@IonicPage()
@Component({
	selector: 'page-inspecao-list',
	templateUrl: 'inspecao-list.html',
})
export class InspecaoListPage {

	public currentItems: InspecaoElement[];

	constructor(public navCtrl: NavController,
		public navParams: NavParams,
		public items: InspecaoProvider,
		public storageDB: StorageFireProvider,
		private fileOpener: FileOpener,
		private file: File,
		public modalCtrl: ModalController,
		public toastCtrl: ToastController,
		public alertCtrl: AlertController,
		public loadingCtrl: LoadingController) { }

	ionViewDidLoad() {
		this.upgradeInspections();
	}

	upgradeInspections() {
		this.items.getAll().then((result) => {
			this.currentItems = result;
		});
	}

	abrirDetalhes(inspecao: InspecaoElement) {
		this.navCtrl.push('InspecaoEditPage', {
			item: inspecao,
		});
	}

	pathForImage(img) {
		return cordova.file.dataDirectory + img;
	}

	novaInspecao() {
		this.navCtrl.push('InspecaoNewPage');
	}
	
	deleteCardInspection(key) {
		this.items.delete(key);
		this.toast('Inspeção apagada com sucesso!');
		this.upgradeInspections();
	}
	
	async uploadCardInspection(i: Inspecao){
		this.toast('Serviço indisponivel no momento..');
		return;
		const filePath = this.pathForImage(i.foto);
		this.storageDB.pushUpload(filePath);
		//console.log(content)
	}

	toast(message) {
		const toast = this.toastCtrl.create({
			message: message,
			duration: 3000
		});
		toast.present();
	}

	createPdf(inspection) {
		const loading = this.loadingCtrl.create({content: 'Aguarde ..'});
		loading.present();
		let YOUR_DEFINITION_HERE = new PdfCreateProvider(inspection).returnPdf();
		
		pdfMake.createPdf(YOUR_DEFINITION_HERE).getBlob(buffer => {
			this.file.resolveDirectoryUrl(this.file.externalRootDirectory)
				.then(dirEntry => {
					this.file.getFile(dirEntry, `${inspection.key}.pdf`, { create: true })
						.then(fileEntry => {
							fileEntry.createWriter(writer => {
								writer.onwrite = () => {
									this.fileOpener.open(fileEntry.toURL(), 'application/pdf')
										.then(res => { loading.dismiss()})
										.catch(err => {
											const alert = this.alertCtrl.create({ message: err.message, buttons: ['Ok'] });
											alert.present();
										});
								}
								writer.write(buffer);
							})
						})
						.catch(err => {
							const alert = this.alertCtrl.create({ message: err, buttons: ['Ok'] });
							alert.present();
						});
				})
				.catch(err => {
					const alert = this.alertCtrl.create({ message: err, buttons: ['Ok'] });
					alert.present();
				});
		});
	}

}
