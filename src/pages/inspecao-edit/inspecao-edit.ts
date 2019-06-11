import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { Inspecao } from '../../models/inspecao';
import { SoldadorProvider } from '../../providers/soldador/soldador';
import { SoldadorElement } from '../../models/soldador';
import { InspecaoProvider } from '../../providers/providers';
import { FileOpener } from '@ionic-native/file-opener';
import { File } from '@ionic-native/file';
import { PdfCreateProvider } from '../../providers/create-pdf/pdf-create';

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

declare var cordova: any;

@IonicPage()
@Component({
	selector: 'page-inspecao-edit',
	templateUrl: 'inspecao-edit.html',
})
export class InspecaoEditPage {

	public item: Inspecao;
	public soldadorList: SoldadorElement[];
	public newInspection: boolean;
	public inspetorList: SoldadorElement[];
	public key: string;

	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		public soldadorProvider: SoldadorProvider,
		private items: InspecaoProvider,
		private fileOpener: FileOpener,
		private file: File,
		public alertCtrl: AlertController) {

		this.newInspection = navParams.get('inspecao') ? true : false;
		this.item = this.newInspection ? navParams.get('inspecao') : navParams.get('item');
		if (navParams.get('key')) { this.key = navParams.get('key') };

	}

	ionViewDidLoad() {
		this.soldadorProvider.getSoldadores().then((result) => {
			this.soldadorList = result;
		});
		this.soldadorProvider.getInspetores().then((result) => {
			this.inspetorList = result;
		});
	}
	
	createPdf() {
		let YOUR_DEFINITION_HERE = new PdfCreateProvider(this.item).returnPdf();

		pdfMake.createPdf(YOUR_DEFINITION_HERE).getBlob(buffer => {
			this.file.resolveDirectoryUrl(this.file.externalRootDirectory)
				.then(dirEntry => {
					this.file.getFile(dirEntry, `${this.item.key}.pdf`, { create: true })
						.then(fileEntry => {
							fileEntry.createWriter(writer => {
								writer.onwrite = () => {
									this.fileOpener.open(fileEntry.toURL(), 'application/pdf')
										.then(res => { })
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

	inspecao() {
		this.navCtrl.pop();
	}

	salvar() {
		this.newInspection ? this.items.insert(this.item) : this.items.update(this.item);
		this.navCtrl.push('InspecaoListPage');
	}

	aprovar() {
		this.item.aprovado = true;
	}

	reprovar() {
		this.item.aprovado = false;
	}

	public pathForImage(img) {
		return cordova.file.dataDirectory + img;
	}

}
