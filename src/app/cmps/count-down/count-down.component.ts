import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.scss']
})
export class CountdownComponent implements OnInit {
  countdown!: string;
 

  ngOnInit() {
    const endDate = new Date('2023-10-20T06:00:00');
    this.startCountdown(endDate);
  }

  startCountdown(endDate: Date) {
    setInterval(() => {
      const currentTime = new Date();
      const timeDifference = endDate.getTime() - currentTime.getTime();

      if (timeDifference <= 0) {
        this.countdown = 'Countdown finished!';
      } else {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        this.countdown = `${days}d ${hours}h ${minutes}m ${seconds}s`;
      }
    }, 1000);
  }
}