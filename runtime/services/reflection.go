package services

import (
	"context"
	"fmt"

	reflectionv1 "cosmossdk.io/api/cosmos/reflection/v1"
	"github.com/cosmos/gogoproto/proto"
	"google.golang.org/protobuf/types/descriptorpb"
)

// ReflectionService implements the cosmos.reflection.v1 service.
type ReflectionService struct {
	reflectionv1.UnimplementedReflectionServiceServer
	files *descriptorpb.FileDescriptorSet
}

func NewReflectionService() (*ReflectionService, error) {
	fmt.Println("NewReflectionService")
	fds, err := proto.MergedFileDescriptors()
	if err != nil {
		return nil, err
	}

	return &ReflectionService{files: fds}, nil
}

func (r ReflectionService) FileDescriptors(_ context.Context, _ *reflectionv1.FileDescriptorsRequest) (*reflectionv1.FileDescriptorsResponse, error) {
	return &reflectionv1.FileDescriptorsResponse{
		Files: r.files.File,
	}, nil
}

var _ reflectionv1.ReflectionServiceServer = &ReflectionService{}
