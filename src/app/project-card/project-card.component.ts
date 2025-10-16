// project-card.component.ts
import { Component, Input } from '@angular/core';
import { Project } from '../shared/project.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-card',
  standalone: true,
  templateUrl: './project-card.component.html',
  imports: [CommonModule]
})
export class ProjectCardComponent {
  @Input() project!: Project;

  initials(t = this.project?.title || '') {
    return t.split(/\s+/).slice(0,2).map(s => s[0]?.toUpperCase()).join('') || 'PR';
  }

  // simple hash → hue for consistent placeholder color per project
  hue(t = this.project?.title || '') {
    let h = 0; for (let i=0; i<t.length; i++) h = (h*31 + t.charCodeAt(i)) % 360;
    return h;
  }
// fffall25
  gradientStyle() {
    const h = this.hue();
    return {
      background: `linear-gradient(135deg, hsl(${h} 70% 35%) 0%, hsl(${(h+30)%360} 80% 55%) 100%)`
    };
  }
}
