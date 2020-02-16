import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-asset-list',
  templateUrl: './asset-list.component.html',
  styleUrls: ['./asset-list.component.scss']
})
export class AssetListComponent implements OnInit {

	public columnDefs: any;
	public rowData: any;
	private gridApi;
	private gridColumnApi;

	constructor(
		private router: Router
	) { }

	ngOnInit() {
		this.configureGrid();
	}

	private configureGrid() {

		this.columnDefs = [
			{headerName: 'Asset Name', field: 'name', sortable: true, filter: true, editable: true, flex: 1},
			{headerName: 'Location', field: 'location', sortable: true, filter: true, editable: true, flex: 1 },
			{headerName: 'Size', field: 'size', sortable: true, filter: true, editable: true, flex: 1},
			{headerName: 'Status', field: 'status', sortable: true, filter: true, editable: true, flex: 1},
			{headerName: 'Image', field: 'image', sortable: true, filter: true, editable: true, flex: 1}
		];

		this.rowData = [
			{ name: 'White Hoarding', location: 'Raipur', size: 35000, status: 'Open', image: 'imageUrl'},
			{ name: 'Hoarding 1', location: 'Kochi', size: 32000, status: 'Open', image: 'imageUrl' },
			{ name: 'Hoarding 2', location: 'Coimbatore', size: 72000, status: 'Open', image: 'imageUrl' },
			{ name: 'Hoarding 3', location: 'Delhi', size: 72000, status: 'Open', image: 'imageUrl' },
		];
	}

	public goToNewAssetPage(): void {
		this.router.navigate(['/billboard', 'dashboard', 'assets', 'newAsset']);
	}

}
