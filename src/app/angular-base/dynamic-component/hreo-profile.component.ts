import { Component, Input } from "@angular/core";
import { AdComponent } from "./ad.model";

@Component({
    template: `
    <div>
        <h3>Featured Hero Profile</h3>
        <h4>{{data.name}}</h4>
        <p>{{data.bio}}</p>
        <strong>Hire this hero today!</strong>
    </div>
    `
})
export class HeroProfileComponent implements AdComponent {
    @Input() data: any;
}