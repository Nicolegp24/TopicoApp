import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-presentacion',
  standalone: true,
  template: '<p>Redirigiendo...</p>'
})
export class Presentacion implements OnInit {

  ngOnInit(): void {
    window.location.href = 'https://www.canva.com/design/DAHCMSS7nG4/BXvMzj6wrRHQsqCohAz8Mg/edit?utm_content=DAHCMSS7nG4&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton';
  }

}
