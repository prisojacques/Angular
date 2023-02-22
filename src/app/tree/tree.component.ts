import {Component, OnInit} from '@angular/core';
import {NodeService} from "../node.service";
import {TreeNode} from "../models/treenode";

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit{


  files1: TreeNode[] = [];

  files2: TreeNode[] = [];

  files3: TreeNode[] = [];

  selectedFiles1: TreeNode[] = [];

  selectedFiles2: TreeNode[] = [];

  selectedFiles3: TreeNode = {};

  cols: any[] = [];

  constructor(private nodeService: NodeService){}

  ngOnInit() {
    this.nodeService.getFiles().then(files => this.files1 = files);
    this.nodeService.getFilesystem().then(files => this.files2 = files);
    this.nodeService.getFiles().then(files => {
      this.files3 = [{
        label: 'Root',
        children: files
      }];
    });

    this.cols = [
      { field: 'name', header: 'Name' },
      { field: 'size', header: 'Size' },
      { field: 'type', header: 'Type' }
    ];
  }

}
