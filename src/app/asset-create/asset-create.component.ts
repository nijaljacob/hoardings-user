import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-asset-create',
  templateUrl: './asset-create.component.html',
  styleUrls: ['./asset-create.component.scss']
})
export class AssetCreateComponent implements OnInit {
	public assetForm: FormGroup;
	public staticAlertClosed = true;

	constructor() { }

	ngOnInit() {
		this.configureForm();
	}

	private configureForm() {
		this.assetForm = new FormGroup({
			assetId: new FormControl({
				value: null,
				disabled: false
			}),
			assetOwner: new FormControl({
				value: null,
				disabled: false
			}),
			assetType: new FormControl({
				value: null,
				disabled: false
			}),
			assetHeight: new FormControl({
				value: null,
				disabled: false
			}),
			assetHeightUnit: new FormControl({
				value: null,
				disabled: false
			}),
			assetWidth: new FormControl({
				value: null,
				disabled: false
			}),
			assetWidthUnit: new FormControl({
				value: null,
				disabled: false
			}),
			assetArea: new FormControl({
				value: null,
				disabled: false
			}),
			assetAreaUnit: new FormControl({
				value: null,
				disabled: false
			}),
			assetState: new FormControl({
				value: null,
				disabled: false
			}),
			assetCity: new FormControl({
				value: null,
				disabled: false
			}),
			assetAddress: new FormControl({
				value: null,
				disabled: false
			}),
			assetPinCode: new FormControl({
				value: null,
				disabled: false
			}),
			ainNumber: new FormControl({
				value: null,
				disabled: false
			}),
			lightingType: new FormControl({
				value: null,
				disabled: false
			}),
			latitude: new FormControl({
				value: null,
				disabled: false
			}),
			longtitude: new FormControl({
				value: null,
				disabled: false
			}),
			assetMarker: new FormControl({
				value: null,
				disabled: false
			}),
			assetSVG: new FormControl({
				value: null,
				disabled: false
			}),
			assetImage: new FormControl({
				value: null,
				disabled: false
			}),
			assetVR: new FormControl({
				value: null,
				disabled: false
			}),
			assetPrice: new FormControl({
				value: null,
				disabled: false
			}),
			assetPriceUnit: new FormControl({
				value: null,
				disabled: false
			}),
			assetDiscount: new FormControl({
				value: null,
				disabled: false
			}),
			assetSummary: new FormControl({
				value: null,
				disabled: false
			}),
			assetLandMark: new FormControl({
				value: null,
				disabled: false
			}),
			assetTGDetails: new FormControl({
				value: null,
				disabled: false
			}),
			assetCreativeDetails: new FormControl({
				value: null,
				disabled: false
			}),
			assetAvailablity: new FormControl({
				value: null,
				disabled: false
			}),
			assetPolicies: new FormControl({
				value: null,
				disabled: false
			}),
			assetEyeBalls: new FormControl({
				value: null,
				disabled: false
			}),
			discardAsset: new FormControl({
				value: null,
				disabled: false
			})
		});
	}

	private createAsset() {
		this.staticAlertClosed = false;
			setTimeout(() => {
				this.staticAlertClosed = true;
			}, 3000);
	}

}
