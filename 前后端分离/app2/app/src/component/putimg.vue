<template>
    <iframe name="uploadfrm" id="uploadfrm" style="display: none;"></iframe>
    <form name="formHead" method="post" action="" id="formHead" enctype="multipart/form-data" target="uploadfrm">

        <div>
            <div>
                <input type="file" name="file_head" id="file_head" onchange="javascript:setImagePreview();" />
            </div>
            <div>
                <div id="DivUp" style="display: none">
                    <input type="submit" data-inline="true" id="BtnUp" value="确认上传" data-mini="true" />
                </div>
            </div>
        </div>
    </form>
    <div data-role="fieldcontain">
        <div id="localImag">
            <img id="preview" width="-1" height="-1" style="display: none" />
        </div>
    </div>
</template>
<script>

</script>
<style>
</style>