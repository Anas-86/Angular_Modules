import { Component } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent {
  modalOpen = false;
  items = [
    { title: 'why is the sky blue?', content: 'The sky is blue because it is' },
    { title: 'what does an orange taste like?', content: 'An orange tastes like orange' },
    { title: 'what color is that cat?', content: 'That cat is an orange color' }
  ];

  onClick() {
    this.modalOpen = !this.modalOpen;
  }
}
