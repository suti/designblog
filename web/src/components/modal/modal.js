import Vue from 'vue'
import modal from './modal.vue'

const app = new Vue({
  el: '#app',
  data() {
    return {
      modalType: 'modal1',
      modalShow: false,
      promptTitle: '操作失败',
      promptKind: 'warning'
    }
  },
  template: `
    <div>
      <div @click="modal1Click">modal1</div>
      <div @click="modal2Click">modal2</div>
      <div @click="modal3Click">modal3</div>
      <modal
        :modalShow="modalShow"
        :type="modalType"
        :placeHolder="promptTitle"
        :promptKind="promptKind"
        @modalClose="modalClose"
      >
        <div style="width:200px;height:100px" v-if="modalType === 'modal1'">
          modal1
        </div>
        <div v-else-if="modalType === 'modal3'">
          modal3
        </div>
      </modal>
    </div>
  `,
  methods: {
    modal1Click: function() {
      this.modalShow = true;
      this.modalType = 'modal1';
    },
    modal2Click: function() {
      this.modalShow = true;
      this.modalType = 'modal2';
    },
    modal3Click: function() {
      this.modalShow = true;
      this.modalType = 'modal3';
    },
    modalClose: function() {
      this.modalShow = false;
    }
  },
  components: {modal}
});
