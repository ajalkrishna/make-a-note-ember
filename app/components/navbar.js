import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class NavbarComponent extends Component {
    @service session

    @action logout(){
        this.session.invalidate();
    }
}
