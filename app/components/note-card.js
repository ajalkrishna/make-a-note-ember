import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class NoteCardComponent extends Component {
    @service store;

    @action
    async delete(index){
        let response = await this.store.findRecord('note', index);
        response.destroyRecord()
    }
    
    @action
    async edit(index){
        // let response = await this.store.findRecord('note', index);
        // response.save()
        console.log(index);
    }
}
