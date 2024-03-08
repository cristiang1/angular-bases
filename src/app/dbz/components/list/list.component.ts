import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input()
  public charaterList: Character[] = [];

  @Output()
  public onDelete = new EventEmitter<string>();

  onDeleteCharacter(id: string): void {
    this.onDelete.emit(id);
  }
}
