<template>
    <v-card>
      <v-card-item>
        <h2 class="headding-ui-3 mt-4 mb-6">基本情報（許可情報）</h2>
        <div class="text-right mb-6">
          <v-btn
            @click="dialog.inputFile = true"
            variant="flat"
            color="info"
            class="mr-2"
          >
            取込
          </v-btn>
          <v-btn @click="dialog.delete = true" variant="flat" color="error">
            削除
          </v-btn>
        </div>
        <v-table class="table_ui mb-8" v-if="Object.keys(props.basicSyobunLabels).length>0">
          <tbody>
            <tr v-if="props.basicSyobunLabels.syobun_date_kihon">
              <th class="w-180">{{ props.basicSyobunLabels.syobun_date_kihon }}</th>
              <td>{{ utils.getDateFormat(input_form.syobun_date_kihon) }}</td>
            </tr>
            <tr v-if="props.basicSyobunLabels.memo_kihon">
              <th>{{ props.basicSyobunLabels.memo_kihon }}</th>
              <td>
                <v-textarea v-model="input_form.memo_kihon" label=""></v-textarea>
              </td>
            </tr>
          </tbody>
        </v-table>
  
        <!-- <div>TODO：変更理由があった場合表示、基本情報（許可情報）のみ</div> -->
        <h3 class="headding-ui-2 mb-4">工事の中止</h3>
        <v-table class="table_ui mb-8">
          <tbody v-if="input_form.haishi!=undefined">
            <tr>
              <th class="w-180">届出日</th>
              <td>
                <FormDatePicker
                  v-model="input_form.haishi.shinsei_date"
                  label=""
                  id="basic_date_01"
                />
              </td>
            </tr>
            <tr>
              <th>届出者住所氏名</th>
              <td>
                <v-text-field
                  label="住所"
                  v-model="input_form.haishi.kojinushi_address"
                ></v-text-field>
                <v-divider class="my-2"></v-divider>
                <v-text-field
                  label="氏名"
                  v-model="input_form.haishi.shinsei_shamei"
                  placeholder=""
                ></v-text-field>
              </td>
            </tr>
            <tr>
              <th class="w-180">許可年月日</th>
              <td>
                <FormDatePicker
                  v-model="input_form.haishi.kyoka_date"
                  label=""
                  id="basic_date_02"
                />
              </td>
            </tr>
  
            <tr>
              <th>許可番号</th>
              <td>
                <v-text-field
                  v-model="input_form.haishi.kyoka_no"
                  placeholder=""
                ></v-text-field>
              </td>
            </tr>
  
            <tr>
              <th>届出の内容</th>
              <td>
                <v-textarea v-model="input_form.haishi.todokede" label=""></v-textarea>
              </td>
            </tr>
            <tr>
              <th>理由</th>
              <td>
                <v-textarea v-model="input_form.haishi.riyuu" label=""></v-textarea>
              </td>
            </tr>
            <tr>
              <th>土地の所在地及び地番</th>
              <td>
                <v-text-field
                  label=""
                  v-model="input_form.haishi.address"
                  placeholder=""
                ></v-text-field>
              </td>
            </tr>
            <tr>
              <th>工事進捗状況及び防災措置</th>
              <td>
                <v-textarea v-model="input_form.haishi.shinchoku" label=""></v-textarea>
              </td>
            </tr>
          </tbody>
        </v-table>
  
        <h3 class="headding-ui-2 mb-4">基本情報</h3>
        <v-table class="table_ui mb-8">
          <tbody v-if="input_form.kihon!=undefined">
            <tr>
              <th class="w-180">申請年月日</th>
              <td>
                <FormDatePicker
                  v-model="input_form.kihon.shinsei_date"
                  label=""
                  id="basic_date_03"
                />
              </td>
            </tr>
            <tr>
              <th>申請者氏名</th>
              <td>
                <v-text-field
                  v-model="input_form.kihon.shinsei_shamei"
                  placeholder=""
                ></v-text-field>
              </td>
            </tr>
            <tr>
              <th>工事主氏名</th>
              <td>
                <v-text-field
                  label="住所（法人役員住所）"
                  v-model="input_form.kihon.kojinushi_address"
                ></v-text-field>
                <v-divider class="my-2"></v-divider>
                <v-text-field
                  label="氏名（法人役員氏名）"
                  v-model="input_form.kihon.kojinushi_shamei"
                  placeholder=""
                ></v-text-field>
              </td>
            </tr>
            <tr>
              <th>設計者氏名</th>
              <td>
                <v-text-field
                  label="住所"
                  v-model="input_form.kihon.sekkei_address"
                  placeholder=""
                ></v-text-field>
                <v-divider class="my-2"></v-divider>
                <v-text-field
                  label="氏名"
                  v-model="input_form.kihon.sekkei_shamei"
                  placeholder=""
                ></v-text-field>
              </td>
            </tr>
            <tr>
              <th>工事施行者住所氏名</th>
              <td>
                <v-text-field
                  label="住所"
                  v-model="input_form.kihon.sekou_address"
                  placeholder=""
                ></v-text-field>
                <v-divider class="my-2"></v-divider>
                <v-text-field
                  label="氏名"
                  v-model="input_form.kihon.sekou_shamei"
                  placeholder=""
                ></v-text-field>
              </td>
            </tr>
            <tr>
              <th>土地の所在地及び地番</th>
              <td>
                <v-text-field
                  label="土地の所在地"
                  v-model="input_form.kihon.address"
                  placeholder=""
                ></v-text-field>
                <v-divider class="my-2"></v-divider>
                <div class="headding-ui-1">代表地点の座標</div>
                <v-row>
                  <v-col cols="2">緯度</v-col>
                  <v-col cols="3">
                    <v-text-field
                      v-model="input_form.kihon.ido_do"
                      label="度"
                      placeholder="0"
                    ></v-text-field
                  ></v-col>
                  <v-col cols="3">
                    <v-text-field
                      v-model="input_form.kihon.ido_fun"
                      label="分"
                      placeholder="0"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="3">
                    <v-text-field
                      v-model="input_form.kihon.ido_byou"
                      label="秒"
                      placeholder="0"
                    ></v-text-field
                  ></v-col>
                </v-row>
                <v-row>
                  <v-col cols="2">経度</v-col>
                  <v-col cols="3">
                    <v-text-field
                      v-model="input_form.kihon.keido_do"
                      label="度"
                      placeholder="0"
                    ></v-text-field
                  ></v-col>
                  <v-col cols="3">
                    <v-text-field
                      v-model="input_form.kihon.keido_fun"
                      label="分"
                      placeholder="0"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="3">
                    <v-text-field
                      v-model="input_form.kihon.keido_byou"
                      label="秒"
                      placeholder="0"
                    ></v-text-field
                  ></v-col>
                </v-row>
              </td>
            </tr>
            <tr>
              <th>土地の面積</th>
              <td>
                <v-text-field
                  v-model="input_form.kihon.tochi_area"
                  placeholder=""
                  suffix="平方メートル"
                ></v-text-field>
              </td>
            </tr>
            <tr>
              <th>工事着手前の土地利用状況</th>
              <td>
                <v-select
                  :items="select_riyou_before"
                  :item-props="utils.codeItemProps"
                ></v-select>
                <v-textarea
                  v-model="input_form.kihon.riyou_before"
                  label=""
                ></v-textarea>
              </td>
            </tr>
            <tr>
              <th>工事完了後の土地利用</th>
              <td>
                <v-select
                  :items="select_riyou_after"
                  :item-props="utils.codeItemProps"
                ></v-select>
                <v-textarea
                  v-model="input_form.kihon.riyou_after"
                  label=""
                ></v-textarea>
              </td>
            </tr>
            <tr>
              <th>盛土のタイプ</th>{{ select_morido_type }}
              <td>
                <div class="d-flex">
                  <v-checkbox
                    v-for="(item, index) in select_morido_type"
                    v-model="input_form.kihon.morido_type"
                    :key="index"
                    :value="item.cd"
                    :label="item.cd_nm"
                    :class="index == 0 ? '' : 'ml-3'"
                  ></v-checkbox>
                </div>
              </td>
            </tr>
            <tr>
              <th>土地の地形</th>
              <td>
                <p class="mb-2">渓流等への該当</p>
                <v-radio-group inline v-model="input_form.kihon.tochi_chikei">
                  <v-radio
                    v-for="(item, index) in select_tochi_chikei"
                    :key="index"
                    :value="item.cd"
                    :label="item.cd_nm"
                    :class="index == 0 ? '' : 'ml-3'"
                  ></v-radio>
                </v-radio-group>
              </td>
            </tr>
          </tbody>
        </v-table>
  
        <h3 class="headding-ui-2 mb-4">工事の概要</h3>
  
        <v-table class="table_ui mb-8">
          <tbody v-if="input_form.gaiyou">
            <tr>
              <th class="w-180">盛土又は切土の高さ</th>
              <td>
                <v-text-field
                  v-model="input_form.gaiyou.mori_kiri_high"
                  placeholder=""
                  suffix="メートル"
                ></v-text-field>
              </td>
            </tr>
            <tr>
              <th>盛土又は切土をする土地の面積</th>
              <td>
                <v-text-field
                  v-model="input_form.gaiyou.mori_kiri_area"
                  placeholder=""
                  suffix="平方メートル"
                ></v-text-field>
              </td>
            </tr>
            <tr>
              <th>盛土又は切土の土量</th>
              <td>
                <v-row>
                  <v-col cols="6">
                    <v-text-field
                      label="盛土"
                      v-model="input_form.gaiyou.mori_doryou"
                      placeholder=""
                      suffix="立方メートル"
                    ></v-text-field
                  ></v-col>
                  <v-col cols="6">
                    <v-text-field
                      label="切土"
                      v-model="input_form.gaiyou.kiri_doryou"
                      placeholder=""
                      suffix="立方メートル"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </td>
            </tr>
            <tr>
              <th>擁 壁</th>
              <td>
                <v-table class="table_ui pt1">
                  <thead>
                    <tr>
                      <th>番号</th>
                      <th>構造</th>
                      <th>高さ</th>
                      <th>延長</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="(i, index) in num_takuchi_yoheki"
                      :key="index"
                    >
                      <td>
                        <v-text-field
                          v-model="input_form.gaiyou.takuchi_yoheki[index].no"
                          placeholder=""
                        ></v-text-field>
                      </td>
                      <td>
                        <v-text-field
                          v-model="input_form.gaiyou.takuchi_yoheki[index].kouzou"
                          placeholder=""
                        ></v-text-field>
                      </td>
                      <td>
                        <v-text-field
                          v-model="input_form.gaiyou.takuchi_yoheki[index].high"
                          placeholder=""
                          suffix="m"
                        ></v-text-field>
                      </td>
                      <td>
                        <v-text-field
                          v-model="input_form.gaiyou.takuchi_yoheki[index].enchou"
                          placeholder=""
                          suffix="m"
                        ></v-text-field>
                      </td>
                    </tr>
                  </tbody>
                </v-table>
                <v-btn
                  class="mt-6"
                  @click="onAddYoheki"
                  :disabled="num_takuchi_yoheki >= 10"
                  color="info"
                  >追加</v-btn
                >
              </td>
            </tr>
            <tr>
              <th>崖面崩壊防止施設</th>
              <td>
                <v-table class="table_ui pt1">
                  <thead>
                    <tr>
                      <th>番号</th>
                      <th>種類</th>
                      <th>高さ</th>
                      <th>延長</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="(i, index) in num_takuchi_gake"
                      :key="index"
                    >
                      <td>
                        <v-text-field
                          v-model="input_form.gaiyou.takuchi_gake[index].no"
                          placeholder=""
                        ></v-text-field>
                      </td>
                      <td>
                        <v-text-field
                          v-model="input_form.gaiyou.takuchi_gake[index].kouzou"
                          placeholder=""
                        ></v-text-field>
                      </td>
                      <td>
                        <v-text-field
                          v-model="input_form.gaiyou.takuchi_gake[index].high"
                          placeholder=""
                          suffix="m"
                        ></v-text-field>
                      </td>
                      <td>
                        <v-text-field
                          v-model="input_form.gaiyou.takuchi_gake[index].enchou"
                          placeholder=""
                          suffix="m"
                        ></v-text-field>
                      </td>
                    </tr>
                  </tbody>
                </v-table>
                <v-btn
                  class="mt-6"
                  color="info"
                  @click="onAddGake"
                  :disabled="num_takuchi_gake >= 10"
                  >追加</v-btn
                >
              </td>
            </tr>
            <tr>
              <th>排水施設</th>
              <td>
                <v-table class="table_ui pt1">
                  <thead>
                    <tr>
                      <th>番号</th>
                      <th>種類</th>
                      <th>内法寸法</th>
                      <th>延長</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="(i, index) in num_takuchi_haisui"
                      :key="index"
                    >
                      <td>
                        <v-text-field
                          v-model="input_form.gaiyou.takuchi_haisui[index].no"
                          placeholder=""
                        ></v-text-field>
                      </td>
                      <td>
                        <v-text-field
                          v-model="input_form.gaiyou.takuchi_haisui[index].kouzou"
                          placeholder=""
                        ></v-text-field>
                      </td>
                      <td>
                        <v-text-field
                          v-model="input_form.gaiyou.takuchi_haisui[index].high"
                          placeholder=""
                          suffix="cm"
                        ></v-text-field>
                      </td>
                      <td>
                        <v-text-field
                          v-model="input_form.gaiyou.takuchi_haisui[index].enchou"
                          placeholder=""
                          suffix="m"
                        ></v-text-field>
                      </td>
                    </tr>
                  </tbody>
                </v-table>
                <v-btn
                  class="mt-6"
                  color="info"
                  @click="onAddHaisui"
                  :disabled="num_takuchi_haisui >= 10"
                  >追加</v-btn
                >
              </td>
            </tr>
            <tr>
              <th>崖面の保護の方法</th>
              <td>
                <v-textarea
                  v-model="input_form.gaiyou.gakemen_hogo"
                  label=""
                ></v-textarea>
              </td>
            </tr>
            <tr>
              <th>崖面以外の地表面の保護の方法</th>
              <td>
                <v-textarea v-model="input_form.gaiyou.igai_hogo" label=""></v-textarea>
              </td>
            </tr>
            <tr>
              <th>工事中の危害防止のための措置</th>
              <td>
                <v-textarea
                  v-model="input_form.gaiyou.kigaiboshi_sochi"
                  label=""
                ></v-textarea>
              </td>
            </tr>
  
            <tr>
              <th>その他の措置</th>
              <td>
                <v-textarea
                  v-model="input_form.gaiyou.sonota_sochi"
                  label=""
                ></v-textarea>
              </td>
            </tr>
            <tr>
              <th class="w-180">工事着手予定年月日</th>
              <td>
                <FormDatePicker
                  v-model="input_form.gaiyou.start_date"
                  label=""
                  id="basic_date_04"
                />
              </td>
            </tr>
            <tr>
              <th class="w-180">工事完了予定年月日</th>
              <td>
                <FormDatePicker
                  v-model="input_form.gaiyou.end_date"
                  label=""
                  id="basic_date_05"
                />
              </td>
            </tr>
            <tr>
              <th>工程の概要</th>
              <td>
                <v-textarea
                  v-model="input_form.gaiyou.kotei_gaiyou"
                  label=""
                ></v-textarea>
              </td>
            </tr>
          </tbody>
        </v-table>
  
        <h3 class="headding-ui-2 mb-4">その他</h3>
  
        <v-table class="table_ui mb-8">
          <tbody v-if="input_form.sonota">
            <tr>
              <th class="w-180">その他必要な事項</th>
              <td>
                <v-textarea
                  v-model="input_form.sonota.sonota_jikou"
                  label=""
                ></v-textarea>
              </td>
            </tr>
            <tr>
              <th>連絡担当者名</th>
              <td>
                <v-text-field
                  v-model="input_form.sonota.tanto_nm"
                  placeholder=""
                ></v-text-field>
              </td>
            </tr>
            <tr>
              <th>電話番号</th>
              <td>
                <v-text-field
                  v-model="input_form.sonota.tel"
                  placeholder=""
                ></v-text-field>
              </td>
            </tr>
  
            <tr>
              <th>メールアドレス</th>
              <td>
                <v-text-field
                  v-model="input_form.sonota.mail_address"
                  placeholder=""
                ></v-text-field>
              </td>
            </tr>
  
            <tr>
              <th>受付年月日</th>
              <td>
                <FormDatePicker
                  v-model="input_form.sonota.uke_date"
                  label=""
                  id="basic_date_06"
                />
              </td>
            </tr>
  
            <tr>
              <th>受付番号</th>
              <td>
                <v-text-field
                  v-model="input_form.sonota.uke_no"
                  placeholder=""
                ></v-text-field>
              </td>
            </tr>
  
            <tr>
              <th>受付者氏名</th>
              <td>
                <v-text-field
                  v-model="input_form.sonota.uke_nm"
                  placeholder=""
                ></v-text-field>
              </td>
            </tr>
            <tr>
              <th>条件</th>
              <td>
                <v-textarea v-model="input_form.sonota.jyouken" label=""></v-textarea>
              </td>
            </tr>
  
            <tr>
              <th>許可年月日</th>
              <td>
                <FormDatePicker
                  v-model="input_form.sonota.kyoka_date"
                  label=""
                  id="basic_date_07"
                />
              </td>
            </tr>
  
            <tr>
              <th>許可番号</th>
              <td>
                <v-text-field
                  v-model="input_form.sonota.kyoka_no"
                  placeholder=""
                ></v-text-field>
              </td>
            </tr>
  
            <tr>
              <th>許可者氏名</th>
              <td>
                <v-text-field
                  v-model="input_form.sonota.kyoka_nm"
                  placeholder=""
                ></v-text-field>
              </td>
            </tr>
          </tbody>
        </v-table>
      </v-card-item>
    </v-card>
  </template>
  
  <script setup>
  
  </script>