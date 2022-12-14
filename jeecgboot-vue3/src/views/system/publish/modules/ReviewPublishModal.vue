<template>
  <BasicModal v-bind="$attrs" @register="registerModal" :title="title" @ok="handleSubmit" width="1000px">
    <a-card :bordered="false">
      <a-row :gutter="8">
        <a-col :span="12">
          <BasicForm @register="registerForm" ref="formRef" :labelCol="{ span: 8 }" />
          <!-- 子表单区域 -->
          <a-dev v-model:activeKey="activeKey" @change="handleChangeTabs">
            <a-dev tab="上线评审明细记录" key="reviewPublishDetail" :forceRender="true">
              <JVxeTable
                keep-source
                resizable
                ref="reviewPublishDetail"
                :loading="reviewPublishDetailTable.loading"
                :columns="reviewPublishDetailTable.columns"
                :dataSource="reviewPublishDetailTable.dataSource"
                :maxHeight="300"
                :rowNumber="false"
                :rowSelection="false"
                :toolbar="true"
              />
            </a-dev>
          </a-dev>
        </a-col>
        <a-col :span="12">
          <a-dev tab="上线评审检查清单检查结果" key="reviewPublishChecklistResult" :forceRender="true">
            <JVxeTable
              keep-source
              resizable
              ref="reviewPublishChecklistResult"
              :loading="reviewPublishChecklistResultTable.loading"
              :columns="reviewPublishChecklistResultTable.columns"
              :dataSource="reviewPublishChecklistResultTable.dataSource"
              :maxHeight="812"
              :rowNumber="false"
              :rowSelection="false"
              :toolbar="false"
            />
          </a-dev>
        </a-col>
      </a-row>
    </a-card>
  </BasicModal>
</template>

<script lang="ts" setup>
  import { ref, computed, unref, reactive } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import { useJvxeMethod } from '/@/hooks/system/useJvxeMethods.ts';
  import { formSchema, reviewPublishDetailColumns, reviewPublishChecklistResultColumns } from '../ReviewPublish.data';
  import { saveOrUpdate, reviewPublishDetailList, reviewPublishChecklistResultList } from '../ReviewPublish.api';
  import { VALIDATE_FAILED } from '/@/utils/common/vxeUtils';
  // Emits声明
  const emit = defineEmits(['register', 'success']);
  const isUpdate = ref(true);
  const refKeys = ref(['reviewPublishDetail', 'reviewPublishChecklistResult']);
  const activeKey = ref('reviewPublishDetail');
  const reviewPublishDetail = ref();
  const reviewPublishChecklistResult = ref();
  const tableRefs = { reviewPublishDetail, reviewPublishChecklistResult };
  const reviewPublishDetailTable = reactive({
    loading: false,
    dataSource: [],
    columns: reviewPublishDetailColumns,
  });
  const reviewPublishChecklistResultTable = reactive({
    loading: false,
    dataSource: [],
    columns: reviewPublishChecklistResultColumns,
  });
  //表单配置
  const [registerForm, { setProps, resetFields, setFieldsValue, validate }] = useForm({
    labelWidth: 150,
    schemas: formSchema,
    showActionButtonGroup: false,
  });
  //表单赋值
  const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
    //重置表单
    await reset();
    setModalProps({ confirmLoading: false, showCancelBtn: data?.showFooter, showOkBtn: data?.showFooter });
    isUpdate.value = !!data?.isUpdate;
    if (unref(isUpdate)) {
      //if (data.record.reviewMembers && !Array.isArray(data.record.reviewMembers)) {
      //data.record.reviewMembers = data.record.reviewMembers.split(',');
      //}
      //表单赋值
      await setFieldsValue({
        ...data.record,
      });
      requestSubTableData(reviewPublishDetailList, { id: data?.record?.id }, reviewPublishDetailTable);
      requestSubTableData(reviewPublishChecklistResultList, { id: data?.record?.id }, reviewPublishChecklistResultTable);
    }
    // 隐藏底部时禁用整个表单
    setProps({ disabled: !data?.showFooter });
  });
  //方法配置
  const [handleChangeTabs, handleSubmit, requestSubTableData, formRef] = useJvxeMethod(requestAddOrEdit, classifyIntoFormData, tableRefs, activeKey, refKeys);

  //设置标题
  const title = computed(() => (!unref(isUpdate) ? '新增' : '评审内容'));

  async function reset() {
    await resetFields();
    activeKey.value = 'reviewPublishDetail';
    reviewPublishDetailTable.dataSource = [];
    reviewPublishChecklistResultTable.dataSource = [];
  }
  function classifyIntoFormData(allValues) {
    let main = Object.assign({}, allValues.formValue);
    return {
      ...main, // 展开
      reviewPublishDetailList: allValues.tablesValue[0].tableData,
      reviewPublishChecklistResultList: allValues.tablesValue[1].tableData,
    };
  }

  //表单提交事件
  async function requestAddOrEdit(values) {
    try {
      setModalProps({ confirmLoading: true });
      //提交表单
      await saveOrUpdate(values, isUpdate.value);
      //关闭弹窗
      closeModal();
      //刷新列表
      emit('success');
    } finally {
      setModalProps({ confirmLoading: false });
    }
  }
</script>

<style lang="less" scoped></style>
