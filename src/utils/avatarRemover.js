import { wrapAsync } from "./asyncHandler";
import { User } from "../models/user.model.js";
import { ApiError } from "./ApiError";
import { ApiResponse } from "./ApiResponse";

let removePreviousAvatar = wrapAsync(async (req, res) => {
  if (!req.user?._id) {
    throw new ApiError(400, "user id is required to delete Avatar");
  }

  let avatarDeleted = await User.findByIdAndUpdate(
    req.user?._id,
    {
      $unset: {
        avatar: "",
      },
    },
    {
      new: true,
    }
  ).select("-password -refreshToken");
  if (!avatarDeleted) {
    throw new ApiError(500, "Something went wrong while deleting the avatar");
  }
  return res
    .status(200)
    .json(new ApiResponse(200, {}, "Avatar deleted successfully"));
});

export { removePreviousAvatar };
