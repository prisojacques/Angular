import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TreeNode} from "./models/treenode";


@Injectable({
  providedIn: 'root'
})
export class NodeService {

  constructor(private http: HttpClient) { }

  getFiles() {
    return this.http.get<any>('assets/files.json')
      .toPromise()
      .then(res => res.data as TreeNode[]);
  }

  getLazyFiles() {
    return this.http.get<any>('assets/files-lazy.json')
      .toPromise()
      .then(res => res.data as TreeNode[]);
  }

  getFilesystem() {
    return this.http.get<any>('assets/filesystem.json')
      .toPromise()
      .then(res => res.data as TreeNode[]);
  }

  getLazyFilesystem() {
    return this.http.get<any>('assets/filesystem-lazy.json')
      .toPromise()
      .then(res => res.data as TreeNode[]);
  }
}
