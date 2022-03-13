import { Component, OnInit } from "@angular/core";
import { DocumentService } from "../document.service";
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-document-preview',
  templateUrl: './document-preview.component.html'
})
export class DocumentPreviewComponent implements OnInit {

    documents: any[] = [];

    constructor(private documentService: DocumentService) { }

    ngOnInit(): void {
        this.getAll();
    }

    downloadFile(documentId: number) {
        this.documentService.download(documentId)
            .subscribe(response => {
                console.log(response);
                const body = response.body;
                const header = response.headers;
                const status = response.status;

                const fileName = header.get('FILE-NAME'); 
                const blob = new Blob([body]);
                saveAs(blob, fileName);
            });
    }

    private getAll() {
        this.documentService
        .getAll()
        .subscribe(data => this.documents = data)
    }
}