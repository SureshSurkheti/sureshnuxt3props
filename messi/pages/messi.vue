<template>
    <v-container>
      <Heading :title="`${route.params.id}の詳細情報`">
        <div class="w-200">
          <v-select
            class="mr-2"
          ></v-select>
        </div>
      
        <v-btn variant="flat" color="success"> 保存 </v-btn>
      </Heading>
  
      <v-sheet class="mt-6">
        <v-table class="table_ui">
          <thead>
            <tr>
              <th>許可番号</th>
                <th>工事の施行状況</th>
                <th>許可年月日</th>
                <th>着手予定年月日</th>
                <th>完了予定年月日</th>
                <th>中間検査年月日</th>
                <th>直近の定期報告年月日</th>
                <th>完了検査年月日</th>
                <th>工事施行地の住所</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>23A00001</td>
              <td>中間検査済</td>
              <td>2024年06月12日</td>
              <td>2024年06月12日</td>
              <td>2024年06月12日</td>
              <td>2024年06月12日</td>
              <td>2024年06月12日</td>
              <td>2024年06月12日</td>
              <td>別府市</td>
            </tr>
          </tbody>
        </v-table>
      </v-sheet>
  
      <v-divider class="my-8"></v-divider>
  
      <v-sheet class="mt-4">
        <v-tabs v-model="tab">
          <v-tab :value="1"> 基本情報（許可情報） </v-tab>
          <v-tab :value="2"> 変更許可情報 </v-tab>
          <v-tab :value="3"> 中間検査情報 </v-tab>
          <v-tab :value="4"> 完了検査情報 </v-tab>
          <v-tab :value="5"> 定期報告情報 </v-tab>
          <v-tab :value="6"> 出力/カルテ作成 </v-tab>
          <v-tab :value="7"> 備考 </v-tab>
        </v-tabs>
        <v-window v-model="tab">
          <v-window-item :value="1">
            <FormsRequestBasic v-if="basic_details" :setData="basic_details" :basicSyobunLabels="basic_syobun_labels" />
          </v-window-item>
          <v-window-item :value="2">
            <FormsRequestChange v-if="change_details" :setData="change_details" />
          </v-window-item>
          <v-window-item :value="3">
            <FormsRequestMiddle v-if="middle_details" :setData="middle_details" />
          </v-window-item>
          <v-window-item :value="4">
            <FormsRequestCompletion />
          </v-window-item>
          <v-window-item :value="5">
            <FormsRequestRegular />
          </v-window-item>
          <v-window-item :value="6">
            <FormsRequestOutput />
          </v-window-item>
          <v-window-item :value="7">
            <FormsRequestNote v-if="note_details" :setData="note_details" />
          </v-window-item>
        </v-window>
      </v-sheet>
    </v-container>
  
  </template>
  <script setup>
  const route = useRoute();
  const tab = ref(null);
  const dialog = ref({ new: false, inputFile: false, delete: false });
  const basic_syobun_labels = ref({
    syobun_date_kihon: "処分等年月日",
    memo_kihon: "メモ欄",
  });
 
  
  onMounted(async() => {
  });
  
 
  </script>