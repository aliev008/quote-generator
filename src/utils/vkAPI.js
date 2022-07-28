
function authHandler(textMessage) {
    const VK = window.VK;
    VK.Auth.login((loginResponse) => {
      if (loginResponse.session) {
        VK.Api.call(
          "wall.post",
          {
            v: "5.131",
            message: textMessage,
            owner_id: loginResponse.session.user.id,
          },
          function (methodCall) {
            if (methodCall.response) {
              alert("Цитаты была опубликована на вашей стене");
            }
          }
        );
      }
    }, 8192 + 65536);
  }

export default authHandler;