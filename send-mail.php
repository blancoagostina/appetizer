<?php 

if (isset(!empty($_POST['contactMessage'])) && !empty($_POST['contactEmail']) &&
   !empty($_POST['contactBusiness']) && !empty($_POST['contactName'])) 

	include "../private/php-email/send-mail.php";

} else {

	?>
	<script type="text/javascript">
		window.location.href = "./"
	</script>
	<?php
	
}

?>