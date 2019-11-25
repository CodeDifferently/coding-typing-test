import { Component, OnInit } from '@angular/core';

import { Badge } from '../models/badge';

@Component({
  selector: 'app-badges',
  templateUrl: './badges.component.html',
  styleUrls: ['./badges.component.css']
})
export class BadgesComponent implements OnInit {


  badgesArray: Array<Badge> = [
  {
      image: "assets/img/40FieryTypist.svg",
      title: "Fast and Furious",
      description: "You have typed 40wpm for over 10 seconds. You've reached average typing speed! Now let's beat it.",
      earned: true
  },
  {
    image: "assets/img/100KeyboardCrusher.svg",
    title: "Keyboard Crusher",
    description: "You've finished 100 attempts in one day. You're flying through the lessons! The next goal is 150 attempts!",
    earned: true
},
{
  image: "assets/img/30TheHeavyweight.svg",
  title: "The Heavyweight",
  description: "You are an endurance fiend!",
  earned: true
},
{
  image: "assets/img/60Marathoner.svg",
  title: "Steadfast Student",
  description: "You've practiced for 60 minutes in one session. Your next goal is 120 minutes.",
  earned: true
},
  {
    image: "assets/img/50FieryTypistMute.svg",
    title: "Fast and Furious",
    description: "This badge has a need for speed. To earn it, type 50wpm for over 10 seconds.",
    earned: false
  },
  {
    image: "assets/img/150KeyboardCrusherMute.svg",
    title: "Keyboard Crusher",
    description: "150 attempts in one day. Go get 'em!",
    earned: false
  },
  {
    image: "assets/img/WeekendHeroMute.svg",
    title: "Weekend Hero",
    description: "You have typed 40wpm for over 10 seconds. You've reached average typing speed! Now let's beat it.",
    earned: false
  },
  {
    image: "assets/img/120MarathonerMute.svg",
    title: "Tireless Typist",
    description: "Make sure to take a break from the computer if you earn this hefty badge!",
    earned: false
  },
  {
    image: "assets/img/5DayStreakMute.svg",
    title: "5 Day Streak",
    description: " A lot can happen in five days, especially in the world of TypingClub. Practice typing five days in a row to earn this sweet new badge.",
    earned: false
  }];
  constructor() { }

  ngOnInit() {
  }

}
