mac=(navigator.appVersion.indexOf('Mac')!=-1)?true:false;
ie=(navigator.appName.charAt(0) == "M")?true:false;
document.write("<STYLE TYPE='text/css'><!--")
if(mac){
	document.write(".size10{font-size:10px; line-height:16px;}")
	document.write(".size12{font-size:12px; line-height:20px;}")
	document.write(".size10n{font-size:10px;}")
	document.write(".size12n{font-size:12px;}")
	document.write("A:link {COLOR:#3366FF; TEXT-DECORATION: underline}")
	document.write("A:hover {COLOR:#FFCC00; TEXT-DECORATION: underline}")
	document.write("A:visited {COLOR:#3366FF; TEXT-DECORATION: underline}")
}
else{
	if(ie){
		document.write(".size10{font-size:10px; line-height:16px;}")
		document.write(".size12{font-size:12px; line-height:20px;}")
		document.write(".size10n{font-size:10px;}")
		document.write(".size12n{font-size:12px;}")
		document.write("A:link {COLOR:#3366FF; TEXT-DECORATION: underline}")
		document.write("A:hover {COLOR:#FFCC00; TEXT-DECORATION: underline}")
		document.write("A:visited {COLOR:#3366FF; TEXT-DECORATION: underline}")
	}
	else{
		document.write(".size10{font-size:11px; line-height:16px;}")
		document.write(".size12{font-size:12px; line-height:20px;}")
		document.write(".size10n{font-size:11px;}")
		document.write(".size12n{font-size:12px;}")
		document.write("A:link {COLOR:#3366FF; TEXT-DECORATION: underline}")
		document.write("A:hover {COLOR:#FFCC00; TEXT-DECORATION: underline}")
		document.write("A:visited {COLOR:#3366FF; TEXT-DECORATION: underline}")
	}
}
//20060914 kousaka add Start
//�A���P�[�g���ڂ̃X�^�C���V�[�g�������o���܂�
document.write("table.matrixComboTable{border: solid 1px #000000; border-collapse: collapse;}");
document.write("td.matrixCombo{font-size: 12px; border: solid 1px #000000; border-collapse: collapse;}");
document.write("td.matrixCombo1{border:none}");
//20060914 kousaka add End
document.write("//--></STYLE>");

function newImage(arg) {
	if (document.images) {
		rslt = new Image();
		rslt.src = arg;
		return rslt;
	}
}

function changeImages() {
	if (document.images && (preloadFlag == true)) {
		for (var i=0; i<changeImages.arguments.length; i+=2) {
			document[changeImages.arguments[i]].src = changeImages.arguments[i+1];
		}
	}
}

var preloadFlag = false;
function preloadImages() {
	if (document.images) {
		preloadFlag = true;
	}
}
//20060914 kousaka add Start
/**
 * �e�L�X�g�G���A�̕��������J�E���g���܂��B<br>
 * @param str �e�L�X�g�G���A�̓��͒l
 * @param flg ���s�`�F�b�N�t���O�itrue�̏ꍇ�́A���s���G�X�P�[�v�������������J�E���g���܂��B�j
 * @return ������
 */
function textAreaCnt( str, flg ){
//��2010/06/21 Mod Start - [�풓�Ή�] 12PKG���P No.75 �������J�E���g���s�R�[�h�Ή�
	var rep = "  ";	//���p�X�y�[�X�Q��

	if( flg ){
		rep = "";	//�u�����N
	}

	//���s�R�[�h�ɂ�镶�����̈Ⴂ�𓝈�
	str = str.replace(/\r\n|\r|\n/g, rep);
	var len = str.length;

	alert("���݂̕�������" + len + "�����ł��B");
//��2010/06/21 Mod End
}

/**
 * ���W�I�{�^���̑I�����������܂��B<br>
 * @param form    �Ώۃt�H�[��
 * @param nameVal �ΏۃI�u�W�F�N�gID
 * @param num     �}�g���b�N�X���iN4���Ɏg�p�j
 */
function resetRadio( form, nameVal, num){
	var element = form.elements[nameVal];
	var undefinedFlg = true;
	
	if( element != null ){
		for( i = 0; i < element.length; i++ ){
			if( element[i].checked ){
				element[i].checked = false;
			}
			undefinedFlg = false;
		}
	}
	//�I��������̏ꍇ�̃`�F�b�N������
	if( undefinedFlg ){
		element = null;
		if( document.getElementById ){
			element = document.getElementById(nameVal);
			element.checked = false;
		}else{
			if( num == 0 ){
				element = form.elements[nameVal];
				element.checked = false;
			}else{
				for( i = 1; i < num; i++ ){
					var strNameVal = nameVal + "_" + i;
					element = form.elements[strNameVal];
					
					if( element != null ){
						for( j = 0; j < element.length; j++ ){
							if( element[j].checked ){
								element[j].checked = false;
							}
						}
					}
				}
			}
		}
	}
}

/**
 * �X�֔ԍ�����͓��e���猟�����܂�<br>
 * @param yubin1	�X�֔ԍ��P�G�������g
 * @param yubin2	�X�֔ԍ��Q�G�������g
 * @param form		�t�H�[���I�u�W�F�N�g
 * @param ken 		���G�������g����
 * @param address �Z���G�������g����
 */
function jsSearchAddress( yubin1, yubin2, form, ken, address ){
	var fname = form.name;
	var ybnno= yubin1.value + yubin2.value;
	if( ybnno.length == 7 && escape(ybnno).length == 7 ){
		var WinF01=window.open ("", "WinF01name", "height=200,width=400,scrollbars=yes,status=yes,toolbar=no,menubar=no,location=no,top=0,left=0");
		WinF01.opener = self;

		var form = document.createElement('form');
		document.body.appendChild(form);
		var input = document.createElement('input');
		input.setAttribute('type','hidden');
		input.setAttribute('name','ybnno');
		input.setAttribute('value', ybnno);
		var input2 = document.createElement('input');
		input2.setAttribute('type','hidden');
		input2.setAttribute('name','fname');
		input2.setAttribute('value',fname);
		var input3 = document.createElement('input');
		input3.setAttribute('type','hidden');
		input3.setAttribute('name','ken');
		input3.setAttribute('value',ken);
		var input4 = document.createElement('input');
		input4.setAttribute('type','hidden');
		input4.setAttribute('name','address');
		input4.setAttribute('value',address);
		form.appendChild(input);
		form.appendChild(input2);
		form.appendChild(input3);
		form.appendChild(input4);
		form.setAttribute('action','../ybnk/ysearch.php');
		form.setAttribute('target','WinF01name');
		form.setAttribute('method','post');
		form.submit();

	}else{
		alert("���p���l7�����œ��͂��Ă��������B");
		return false;
	}
}

/**
 * �X�֔ԍ����Z�����猟�����܂�<br>
 * @param yubin1Name	�X�֔ԍ��P�G�������g����
 * @param yubin2Name	�X�֔ԍ��Q�G�������g����
 * @param kenName 		���G�������g����
 * @param addressName �Z���G�������g����
 */
function jsSearchZip( yubin1Name, yubin2Name, kenName, addressName ){
	var formLength = document.forms.length;
	var formName = "";
	for( i = 0; i < formLength; i++ ){
		if( document.forms[i].elements[yubin1Name] ){
			if( document.forms[i].elements[yubin1Name].type == "text" ){
				formName = document.forms[i].elements[yubin1Name].form.name;
			}
		}
	}
	
	var url = "../ybnk/ybnk010.php?fname=" + formName + "&ybnz1=" + yubin1Name + "&ybnz2=" + yubin2Name + "&ken=" + kenName + "&address=" + addressName;
	var WinF01=window.open (url, "WinF01name", "height=400,width=500,scrollbars=yes,status=yes,toolbar=no,menubar=no,location=no,top=0,left=0");
	WinF01.opener = self;
}
//20060914 kousaka add End
